import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  number: number;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(500)
      .pipe(
        tap(console.log)
      )
      .subscribe({
        next: value => this.number = value,
        error: err => { },
        complete: () => console.log('Stream beendet')
      });
  }

  ngOnDestroy(): void {
    console.log('SubscriptionComponent zerstört');
    this.subscription.unsubscribe();
  }

}
