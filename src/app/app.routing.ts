import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import {PageComponent} from './page/page.component';
import {MapsComponent} from './maps/maps.component';
import { Page2Component } from './page2/page2.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { Maps2Component } from './maps2/maps2.component';

const appRoutes: Routes = [
    
    { path: '', component: HomeComponent,canActivate:[AuthGuard]},
    {path:'',component:PageComponent},
    {path:'page',component:PageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'maps',component:MapsComponent},
    { path:'page2',component:Page2Component},
    {path:'chat',component:ChatDialogComponent},
    {path:'maps2',component:Maps2Component},
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);