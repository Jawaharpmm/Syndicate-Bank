import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

declare const ass:any;
//const myHeading: HTMLHeadingElement = document.querySelector(".content");


@Component({
    
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    sh=true;    

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
       this.userService.delete(id).subscribe(() => { this.loadAllUsers() });

    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    onclick()
    {
        ass()
    }
}

