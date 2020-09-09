import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MemberListComponent} from '../members/member-list/member-list.component';
import {MessagesComponent} from '../messages/messages.component';
import {ListsComponent} from '../lists/lists.component';
import {AuthGuard} from '../guard/auth.guard';
import {MemberDetailsComponent} from '../members/member-details/member-details.component';
import {MemberDetailResolver} from '../resolve/member-detail.resolver';
import {MemberListResolver} from '../resolve/member-list.resolver';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}
      },
      {
        path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDetailResolver}
      },
      {
        path: 'messages', component: MessagesComponent
      },
      {
        path: 'lists', component: ListsComponent
      }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
