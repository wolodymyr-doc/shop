import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UrlRegistry } from '../utils/app.utils';
import { Goods } from '../model/goods';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoodsService {

    private goodsApiBase:string = UrlRegistry.rootBackendUrl() + '/project/';

    private goodsApiUrl:string;

    constructor(private http:Http) {
        this.http = http;
    }

    public listAllGoodss(projectId):Promise<Array<Goods>> {
        this.goodsApiUrl = this.goodsApiBase + projectId +'/goods';
        return this.http.get(this.goodsApiUrl + '/all')
            .toPromise()
            .then(this.extractDataElements)
            .catch(this.catchError)
    }

    public updateGoods(goods:Goods):Promise<Goods> {
        return this.http.put(this.goodsApiUrl + '/update', goods)
            .toPromise()
            .then(this.extractData)
            .catch(this.catchError)
    }

    public copyGoods(goods:Goods):Promise<Goods> {
        return this.http.post(this.goodsApiUrl + '/' + goods.id + '/copy', [])
            .toPromise()
            .then(this.extractData)
            .catch(this.catchError)
    }

    public deleteGoods(goods:Goods):Promise<Goods> {
        return this.http.delete(this.goodsApiUrl + '/' + goods.id + '/remove')
            .toPromise()
            .then(this.extractData)
            .catch(this.catchError)
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || {};
    }

    private extractDataElements(res:Response) {
        let body = res.json().elements;
        return body || {};
    }

    private catchError(error:any):Promise<any> {
        let errMsg = (error.message) ? error.message : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
