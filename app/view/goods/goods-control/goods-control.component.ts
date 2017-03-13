import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';

import { Goods } from '../../../model/goods';
import { User } from '../../../model/user';
import { GoodsService } from '../../../service/goods.service';
import { UserService } from '../../../service/user.service';
import { Constant } from '../../../utils/app.constant';

@Component({
    selector: 'goods-control',
    templateUrl: './goods-control.component.html',
    styleUrls: ['./goods-control.component.css']
})

export class GoodsControlComponent {

    @Input()
    goods:Goods;
    @Input()
    goodss:Array<Goods>;
    @Input()
    i:number;

    @Output() editMode:EventEmitter<boolean> = new EventEmitter<boolean>();

    onEdit() {
        this.editMode.emit(true);
    }

    public isApproveClicked:boolean = false;
    public isArchiveClicked:boolean = false;
    public isUnarchiveClicked:boolean = false;
    public isDuplicateCliked:boolean = false;
    public isDeleteClicked:boolean = false;
    public isEditMode:boolean = false;

    public approveButtonName:string = 'Approve';
    public archiveButtonName:string = 'Archive';
    public unarchiveButtonName:string = 'Unarchive';
    public duplicateButtonName:string = 'Duplicate';
    public deleteButtonName:string = 'Delete';

    private user:User;

    constructor(private goodsService:GoodsService, private userService:UserService) {
        this.user = userService.getCurrentUser();
    }

    onApprove(goods:Goods):void {
        if (this.isApproveClicked) {
            this.approveGoods(goods);
        } else {
            this.isApproveClicked = true;
            this.approveButtonName = 'Click to confirm';
        }
    }

    onArchive(goods:Goods):void {
        //if (this.isArchiveClicked) {
        this.archiveGoods(goods);
        //} else {
        //    this.isArchiveClicked = true;
        //    this.archiveButtonName = 'Click to confirm';
        //}
    }

    onUnarchive(goods:Goods):void {
        //if (this.isUnarchiveClicked) {
        this.unarchiveGoods(goods);
        //} else {
        //    this.isUnarchiveClicked = true;
        //    this.unarchiveButtonName = 'Click to confirm';
        //}
    }

    onDelete(goods:Goods, i:number):void {
        if (this.isDeleteClicked) {
            this.deleteGoods(goods, i);
        } else {
            this.isDeleteClicked = true;
            this.deleteButtonName = 'Click to confirm';
        }
    }

    onDuplicate(goods:Goods):void {
        if (this.isDuplicateCliked) {
            this.duplicateGoods(goods);
        } else {
            this.isDuplicateCliked = true;
            this.duplicateButtonName = 'Click to confirm';
        }
    }

    approveGoods(goods:Goods):void {
        goods.isApproved = true;
        goods.userId = this.user.id;
        this.goodsService.updateGoods(goods).then(
            res => {
                goods = res;
                this.isApproveClicked = false;
                this.approveButtonName = 'Approve';
            }),
            error => this.handleError(error);
    }

    archiveGoods(goods:Goods):void {
        goods.isArchived = true;
        goods.userId = this.user.id;
        this.goodsService.updateGoods(goods).then(
            res => {
                goods = res;
                this.isArchiveClicked = false;
                this.archiveButtonName = 'Archive';
            }),
            error => this.handleError(error);
    }


    unarchiveGoods(goods:Goods):void {
        goods.isArchived = false;
        goods.userId = this.user.id;
        this.goodsService.updateGoods(goods).then(
            res => {
                goods = res;
                this.isUnarchiveClicked = false;
                this.unarchiveButtonName = 'Unarchive';
            }),
            error => this.handleError(error);
    }

    private handleError(error:any):void {
        console.log('error', error)
    }


    duplicateGoods(goods:Goods) {
        this.goodsService.copyGoods(goods).then(
            res => {
                console.log(res);
                this.goodss.unshift(res);
                this.isDuplicateCliked = false;
                this.duplicateButtonName = 'Duplicate';
            }),
            error => this.handleError(error);
    }

    deleteGoods(goods:Goods, i:number) {
        this.goodsService.deleteGoods(goods).then(
            res => {
                this.goodss.splice(i, 1);
                this.deleteButtonName = 'Delete';
            }),
            error => this.handleError(error)
    }
}

