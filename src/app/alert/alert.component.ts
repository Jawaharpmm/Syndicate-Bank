//import { Component, OnInit } from '@angular/core';

//@Component({
  //selector: 'app-alert',
  //templateUrl: './alert.component.html',
  //styleUrls: ['./alert.component.css']
//})
//export class AlertComponent implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}
import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
    
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}