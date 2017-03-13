import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import {Project} from '../../model/project';
import {ProjectService} from '../../service/project.service';
import { ProjectItemComponent } from '../project/project-item/project-item.component';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css']
})
export class AddGoodsComponent implements OnInit {
  currentProjectUrl: string;

  ngOnInit() {
  }

  constructor(private projectService: ProjectService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, public dialog: MdDialog) {
    iconRegistry.addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl('resources/icons/plus.svg'));
  }

  addNewGoods() {
    this.currentProjectUrl = this.projectService.getProjectUrl();
    location.href = this.currentProjectUrl;
  }


}

@Component({
  selector: 'app-add-goods-dialog',
  templateUrl: './add-goods-dialog.component.html',
  styleUrls: ['./add-goods-dialog.component.css']
})
export class AddGoodsDialogComponent {
  projectName: string;
  constructor(public dialogRef: MdDialogRef<AddGoodsDialogComponent>) {}
}