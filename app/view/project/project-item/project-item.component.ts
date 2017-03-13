import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';


import {Project} from '../../../model/project';
import {ProjectService} from '../../../service/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})

export class ProjectItemComponent implements OnInit {
  @Input()
  projects:Array<Project>;
  @Output() selectedProject: EventEmitter<Project> = new EventEmitter<Project>();
  selectedProjectId: string;

  constructor(private projectService: ProjectService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    //this.getPr();
    iconRegistry.addSvgIcon(
        'folder',
        sanitizer.bypassSecurityTrustResourceUrl('resources/icons/folder.svg'));
        iconRegistry.addSvgIcon(
            'folder-undefined',
            sanitizer.bypassSecurityTrustResourceUrl('resources/icons/folder-1.svg'));

    projectService.getProjects().then(
        projects => {
          if(projects) {
            this.selectedProject.emit(projects[0]);
            this.selectedProjectId = projects[0].id;
          }
        }
    );

  }

  ngOnInit() {}

  private handleError(error:any):void {
    console.log('error', error)
  }

  onChooseProject(project: Project): void {
    this.selectedProject.emit(project);
    this.selectedProjectId = project.id;
  }

  isSelected(projectId: string) {
    if(this.selectedProjectId == projectId) {
      return 'selected';
    } else {
      return '';
    }
  }


}
