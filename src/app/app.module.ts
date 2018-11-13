import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {FireserveService } from './services/fireserve.service';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForumComponent } from './forum/forum.component';

//Nitty Gritty
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './components/auth/auth.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';

import { AdminComponent } from './components/admin/admin.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminItemComponent } from './components/admin/admin-list/admin-item/admin-item.component';
import { AdminDetailComponent } from './components/admin/admin-detail/admin-detail.component';

import { UserComponent } from './components/user/user.component';

import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventItemComponent } from './components/event/event-list/event-item/event-item.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForumComponent,
    AdminComponent,
    AdminListComponent,
    AdminItemComponent,
    AdminDetailComponent,

    UserComponent,

    EventComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FireserveService, AuthService, UserService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
