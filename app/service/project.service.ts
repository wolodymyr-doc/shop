import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import {Project} from '../model/project';
import {UrlRegistry} from '../utils/app.utils';

@Injectable()
export class ProjectService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private projectsUrl: string = UrlRegistry.rootBackendUrl() + '/project/';
    project: Project;
    currentProjectId: string;
    testa: Subject<String> = new Subject();

    constructor(private http: Http) {
        this.testa.subscribe(valu => console.log(valu));
        this.testa.next('step 1');
        this.testa.next('step 2');
    }

    getCurrentProjectId(): string {
        return this.currentProjectId;
    }

    setCurrentProjectId(id: string): void {
        this.currentProjectId = id;
    }

    getPr(): Project {
        return this.project;
    }
    getProjectUrl(): string {
        return '/#project/' + this.getCurrentProjectId();
    }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl + '/all')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getProject(id: string): Promise<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Project)
            .catch(this.handleError);
    }

    create(name: string): Promise<Project> {
        return this.http
            .post(this.projectsUrl + '/create', JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    delete(project: Project): Promise<Project> {
        return this.http.delete(this.projectsUrl + '/' + project.id + '/remove', {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(project: Project): Promise<Project> {
        const url = `${this.projectsUrl}/${project.id}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
