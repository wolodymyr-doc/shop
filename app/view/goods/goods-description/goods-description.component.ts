import { Component, Input } from '@angular/core';
import {Http} from '@angular/http';

import { Goods } from '../../../model/goods';
import { GoodsService } from '../../../service/goods.service';
import { Constant } from '../../../utils/app.constant';

@Component({
    selector: 'goods-description',
    templateUrl: './goods-description.component.html',
    styleUrls: ['./goods-description.component.css']
})

export class GoodsDescriptionComponent {

    @Input()
    goods:Goods;


    resolveFunctionalDomain(functionalDomainId:string):string {
        return Constant.getFunctionalDomains()[functionalDomainId];
    }

    resolveStatusColors(status:string):string {
        return Constant.getStatusColors()[status];
    }

    resolveSourceName(source:string):string {
        console.log(source)
        return source;
    }

}

