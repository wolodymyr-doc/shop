import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


import {Project} from '../../../model/project';
import {ProjectService} from '../../../service/project.service';
import { ProjectItemComponent } from '../project-item/project-item.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {
  ngOnInit() {
  }

  @Input()
  projects:Array<Project>;

  constructor(private projectService: ProjectService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, public dialog: MdDialog) {
    iconRegistry.addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl('resources/icons/plus.svg'));
  }

  addItemDialog() {
    let dialogRef = this.dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(resultName => {
      this.add(resultName);
    });
  }

  add(name: string): void {
    if(!name) {
      return;
    }
    name = name.trim();
    this.projectService.create(name).then(
        project => {
          console.log('project added')
          this.projects.push(project);
          console.log(this.projects)
        },
        err => this.handleError(err)
    );
  }

  private handleError(error:any):void {
    console.log('error', error)
  }
}

  @Component({
    selector: 'app-add-project-dialog',
    templateUrl: './add-project-dialog.component.html',
    styleUrls: ['./add-project-dialog.component.css']
  })
  export class AddProjectDialogComponent {
    projectName: string;
    constructor(public dialogRef: MdDialogRef<AddProjectDialogComponent>) {}
  }
