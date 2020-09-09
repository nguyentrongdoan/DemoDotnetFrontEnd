import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './service/error.interceptor';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import {JwtModule} from '@auth0/angular-jwt';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MemberDetailResolver} from './resolve/member-detail.resolver';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';


export function tokenGetter(): string {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailsComponent,
    MemberEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        BrowserAnimationsModule,
        NgxGalleryModule,
        TabsModule.forRoot(),
        JwtModule.forRoot({
          config: {
            tokenGetter,
            allowedDomains: ['localhost:5000'],
            disallowedRoutes: ['localhost:5000/api/auth']
          }
        })
    ],
  providers: [
    ErrorInterceptorProvider,
    MemberDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
