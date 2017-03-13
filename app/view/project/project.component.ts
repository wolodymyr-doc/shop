import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


import {Project} from '../../model/project';
import {ProjectService} from '../../service/project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent {
    projects: Array<Project>;
    @Output() selectedProject: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(private projectService: ProjectService) {
        projectService.getProjects().then(
            projects => {
                this.projects = projects;
                if (projects && projects.length)
                    this.onChangeProject(projects[0]);
            }
        );
    }

    onChangeProject(project: Project): void {
        if (!project) return;
        this.projectService.setCurrentProjectId(project.id);
        this.selectedProject.emit(project);
    }
}
