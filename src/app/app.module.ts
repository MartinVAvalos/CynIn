import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventItemComponent } from './event/event-list/event-item/event-item.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { DataStorageService } from './shared/data-storage.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MemberService } from './member/member.service';
import { EventService } from './event/event.service';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MemberComponent,
    EventComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MemberService, EventService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
