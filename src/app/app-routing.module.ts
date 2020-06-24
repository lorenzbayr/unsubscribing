import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from './subscription/subscription.component';
import {SubjectComponent} from './subject/subject.component';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';
import { CancelComponent } from './cancel/cancel.component';


const routes: Routes = [
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'async-pipe', component: AsyncPipeComponent },
  { path: 'cancel', component: CancelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
