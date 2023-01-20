import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {

  droplist: boolean = false;
  droplist1: boolean = false;
  itemcoutn: number;

  @Input() userChatList: any[] = [];

  constructor() {
    this.itemcoutn = this.userChatList.length;
  }
  ngOnInit(): void { }
  changeicon() {
    (this.droplist === true) ? (this.droplist = false) : (this.droplist = true);
  }
  changeicon1() {
    (this.droplist1 === true) ? (this.droplist1 = false) : (this.droplist1 = true);
  }
}
