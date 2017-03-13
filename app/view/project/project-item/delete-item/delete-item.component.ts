import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {MdDialog, MdDialogRef, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import {Project} from '../../../../model/project';
import {ProjectService} from '../../../../service/project.service';
import { ProjectItemComponent } from '../project-item.component';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {
  @Input()
  project: Project;
  @Input()
  projects: Array<Project>;
  @Input()
  index:number;



  constructor(private projectService: ProjectService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private projectItem: ProjectItemComponent, public dialog: MdDialog) {
    iconRegistry.addSvgIcon(
        'basket',
        sanitizer.bypassSecurityTrustResourceUrl('resources/icons/basket.svg'));
  }

  ngOnInit() {
  }

  deleteItemDialog() {
    let dialogRef = this.dialog.open(DeleteItemDialogComponent);
    dialogRef.afterClosed().subscribe(confirmationOfDelete => {
      if (confirmationOfDelete) {
        // this.projectService.deleteProject(this.project);
        this.projectService.delete(this.project);
      }
    });
  }

  // delete(): void {
  //   console.log('delete',this.projects[this.index]);
  //   this.projectService.delete(this.projects[this.index]).then(
  //       project => {
  //         this.projects.splice(this.index,1);
  //         console.log('project removed')
  //       }
  //   );
  //   }
}

  @Component({
    selector: 'app-delete-project-dialog',
    templateUrl: './delete-item-dialog.component.html',
    styleUrls: ['./delete-item-dialog.component.css']
  })
  export class DeleteItemDialogComponent {
    project: Project;
    constructor(public dialogRef: MdDialogRef<DeleteItemDialogComponent>) {}
  }
