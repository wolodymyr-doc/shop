import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UrlRegistry } from '../utils/app.utils';
import { User} from '../model/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private user:User;
    private userApiUrl:string = UrlRegistry.rootBackendUrl() + '/user';

    constructor(private http:Http) {
        this.http = http;
    }

    public authenticate():Promise<User> {
        return this.http.get(this.userApiUrl + '/current/get')
            .toPromise()
            .then((res:Response) => {
                this.user = res.json();
                return this.user;
            })
            .catch(this.catchError)
    }

    public getCurrentUser():User {
        return this.user;
    }

    private catchError(error:any):Promise<any> {
        let errMsg = (error.message) ? error.message : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
