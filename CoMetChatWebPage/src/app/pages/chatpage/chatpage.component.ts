import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  @Input() userChatList: any[] = [];
  constructor() { }
  ngOnInit(): void {
  }
}
