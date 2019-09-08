import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent } from './app.component';
import { routing } from './app.routing';


import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService} from './services/authentication.service';
import {  UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { PageComponent } from './page/page.component';
import { FreComponent } from './fre/fre.component';
import { NewComponent } from './new/new.component';
import { MapsComponent } from './maps/maps.component';
import { Nav2Component } from './nav2/nav2.component';
import { Page2Component } from './page2/page2.component';

import { ChatModule } from './chat/chat.module';
import { Maps2Component } from './maps2/maps2.component';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './services/alert.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        ChatModule
    ],
    declarations: [
        AppComponent,
        
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        TableComponent,
        PageComponent,
        FreComponent,
        NewComponent,
        MapsComponent,
        Nav2Component,
        Page2Component,
        Maps2Component,
        AlertComponent,
    
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider,
        
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }