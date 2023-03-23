import { Component } from '@angular/core';
import { ServiceService } from './core/service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService]
})
export class AppComponent {

  puserChatList:any[]=[];
  constructor(private serv: ServiceService) {
    this.puserChatList = serv.getCustomers();
    console.log(this.puserChatList);
  }

  ngOnInit(): void {
    // this.getUserChatList();
  }
  // getUserChatList() {
    // this.serv.getUserList().subscribe((result: any) => {
    //   this.puserChatList = result.results;
    // })
    // this.puserChatList=this.serv
  // }
  // customers: Customer[];

  // constructor(service: Service) {
  //   this.customers = service.getCustomers();
  // }
}
