import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnsubscriberService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  readonly takeUntilDestroy = <T>(origin: Observable<T>): Observable<T> =>
    origin.pipe(takeUntil(this.destroy$));

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
