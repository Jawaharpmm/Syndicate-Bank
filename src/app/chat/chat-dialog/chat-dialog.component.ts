//import { Component, OnInit } from '@angular/core';

//@Component({
  //selector: 'app-chat-dialog',
  //templateUrl: './chat-dialog.component.html',
  //styleUrls: ['./chat-dialog.component.css']
//})
//export class ChatDialogComponent implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}
import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Router } from '@angular/router';


@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService,private router:Router) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
  onload()
  {
       this.router.navigate(['/home']);
  }

}

