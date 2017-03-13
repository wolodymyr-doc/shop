import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AlertDialogHelper } from '../dialogs/alert-dialog';
const systemErrorMessage = 'System error. Please, try again later';
const unauthorizedMessage = 'Please, login to access this page';

@Injectable()
export class HttpHelp {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private alertDialog:AlertDialogHelper) {
    }

    get(url:string): Promise<any> {
        let p = this.http.get(url).toPromise().then(this.responseHandler);
        p.catch(this.errorHandler);
        return p;
    }
    responseHandler(res: Response): any {
        let message = systemErrorMessage;
        if (res.ok) {
            try {
                return res.json();
            } catch(e) {
                throw new Error(message);
            }
        }
        if (res.status==401) message="Unauthorized";
        else {
            try {
                let p = res.json();
                if (p && p.message) message=p.message;
            } catch(e) {}
        }
        throw new Error(message);
    }
    relogin(): void {
        if (window.reloginUrl) {
            window.location.href = window.reloginUrl+"?b=1";
        }
    }
    errorHandler(reason:string):void {
        if (reason==='Unauthorized') {
            this.alertDialog.showPopup(unauthorizedMessage).
               subscribe(this.relogin)
        } else {
            this.alertDialog.showPopup(reason);
        }
    }
}
