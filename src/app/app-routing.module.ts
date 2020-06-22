import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './subscription/subscription.component';
import {SubjectComponent} from './subject/subject.component';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';


const routes: Routes = [
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'async-pipe', component: AsyncPipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
