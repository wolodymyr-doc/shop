import {Component, OnInit, Input} from '@angular/core';
import {MdDialog, MdDialogRef, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


import {Project} from '../../../../model/project';
import {ProjectService} from '../../../../service/project.service';

@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.component.html',
    styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
    @Input() project: Project;

    ngOnInit() {
    }

    constructor(private projectService: ProjectService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, public dialog: MdDialog) {
        iconRegistry.addSvgIcon(
            'edit',
            sanitizer.bypassSecurityTrustResourceUrl('resources/icons/editing.svg'));
    }


    editItemDialog() {
        if (!this.project) return;
        let dialogRef = this.dialog.open(EditProjectDialogComponent);
        dialogRef.componentInstance.projectName = this.project.name;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.project.name = result;
            }
        });
    }
}

@Component({
    selector: 'app-edit-project-dialog',
    templateUrl: './edit-project-dialog.component.html',
    styleUrls: ['./edit-project-dialog.component.css']
})
export class EditProjectDialogComponent {
    projectName: string;
    constructor(public dialogRef: MdDialogRef<EditProjectDialogComponent>) {
    }
}
