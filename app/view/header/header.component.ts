import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Header} from '../../model/header';
import {HeaderService} from '../../service/header.service';
import {window} from "rxjs/operator/window";

@Component({
    selector: 'header-panel',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent {

    headMenu: Header = {userName: '', menu: []};

    constructor(private http: Http, private headerService: HeaderService) {
        console.log('Before loading data');
        this.http.get('/calculator-rest/api/calculator/headerInfo')
            .map(response => response.json())
            .subscribe(res => {
                this.headMenu = res;
                console.log(res);
            });
    }

}