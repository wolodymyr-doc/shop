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
    

    constructor(private userService:UserService) {
/************************
        this.userService.authenticate()
            .then((user) => {
                console.log('current user', user)
            })
*********************************/
    }

}
