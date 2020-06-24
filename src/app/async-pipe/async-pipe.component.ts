import { Component} from '@angular/core';
import {interval} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  stream$ = interval(500)
    .pipe(
      tap(console.log)
    );

}
