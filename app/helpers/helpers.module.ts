import { ConfirmDialog, ConfirmDialogHelper } from './dialogs/confirm-dialog';
import { AlertDialog, AlertDialogHelper } from './dialogs/alert-dialog';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [
        ConfirmDialog, AlertDialog
    ],
    declarations: [
        ConfirmDialog, AlertDialog
    ],
    providers: [
        ConfirmDialogHelper, AlertDialogHelper
    ],
    entryComponents: [
        ConfirmDialog, AlertDialog
    ]
})
export class HelpersModule { }
