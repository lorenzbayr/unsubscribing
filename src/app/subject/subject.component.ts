import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  number: number;

  constructor() { }

  ngOnInit(): void {
    interval(500)
      .pipe(
        tap(console.log),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe({
        next: value => this.number = value,
        error: err => { },
        complete: () => console.log('Stream beendet')
      });
  }

  ngOnDestroy(): void {
    console.log('SubjectComponent zerstört');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
