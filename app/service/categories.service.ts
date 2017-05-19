import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'RxJS/Rx';
import {UrlRegistry} from '../utils/app.utils';
import {Categories} from '../model/categories';

@Injectable()
export class CategoriesService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private adminUrl: string = UrlRegistry.rootBackendUrl() + '/admin/categories';

    constructor(private http: Http) {
         
    }

    getCategories(): Observable<Categories[]> {
        return this.http.get(this.adminUrl)
               .map(response => response.json() as Categories[]);
    }

}
