import { Component, Input, OnChanges } from '@angular/core';

import { Goods } from '../../model/goods';
import { User } from '../../model/user';
import { GoodsService } from '../../service/goods.service';
import { UserService } from '../../service/user.service';
import { Constant } from '../../utils/app.constant';

@Component({
    selector: 'goods',
    templateUrl: './goods.component.html',
    styleUrls: ['./goods.component.css']
})

export class GoodsComponent implements OnChanges {
    goodsList:Array<Goods>;
    selectedGoods:Goods;
    @Input() selectedProject;
    constructor(private goodsService:GoodsService, private userService:UserService) {
    }

    ngOnChanges(changes) : void {
        if (this.selectedProject) {
            this.goodsService.listAllGoodss(this.selectedProject.id).then(
                goodsList => this.goodsList = goodsList,
                error => this.handleError(error)
            )
        }
    }

    onSelect(goods:Goods):void {
        this.selectedGoods = goods;
    }


    onEditModeChange(editMode:boolean, goods:Goods):void {
        goods.editMode = true;
    }

    onKeyDown(event:any, goods:Goods):void {
        if (event.keyCode == 13) {
            console.log('enter clicked', goods)
            this.updateGoods(goods);
        }
    }

    updateGoods(goods:Goods):void {
        goods.userId = this.userService.getCurrentUser().id;
        this.goodsService.updateGoods(goods).then(
            res => {
                goods.editMode = false;
                goods = res;
            }),
            error => this.handleError(error);
    }

    private handleError(error:any):void {
        console.log('error', error)
    }
}

