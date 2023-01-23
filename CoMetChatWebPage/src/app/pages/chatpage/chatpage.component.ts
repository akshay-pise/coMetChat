import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  @Input() userChatList: any[] = [];
  // chatarray:any[]=["hello"];
  frchatarray:any;
  mychatarray:any[]=[];
  mychatObj:any={
    msg: '',
    doj: new Date()
  }

  constructor() {
    this.frchatarray=[{
      msg: 'Hello.. !',
      doj: new Date()
    },
    {
      msg: 'How are you',
      doj: new Date()
    }
  ]
  }
  ngOnInit(): void {
  }
  OnSubmit(){
    debugger;
    this.mychatarray.push(this.mychatObj);
    console.log(this.mychatarray);

    this.mychatObj={
      msg: '',
      doj: new Date()
    }
  }
}
