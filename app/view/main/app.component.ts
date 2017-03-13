import { Component } from '@angular/core';

import { User } from '../../model/user';
import { Project } from '../../model/project';
import { UserService} from '../../service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedProject: Project;
    

    constructor(private userService:UserService) {
        this.userService.authenticate()
            .then((user) => {
                console.log('current user', user)
            })
    }

    onChangeProject(project: Project): void {
        this.selectedProject = project;
    }
}
