import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable()
export class AlertDialogHelper {

    constructor(private dialog: MdDialog) { }

    public showPopup(message: string, title: string): Observable<boolean> {

        let dialogRef: MdDialogRef<AlertDialog>;

        dialogRef = this.dialog.open(AlertDialog);
        if (!title) title = 'Error';
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}


@Component({
    selector: 'alert-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
    `,
})
export class AlertDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<AlertDialog>) {

    }
}
