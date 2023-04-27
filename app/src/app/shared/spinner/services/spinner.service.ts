import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoading$ = this.isLoading.asObservable();

  constructor() {}

  show(): void {
    this.isLoading.next(true);
  }

  hide(): void {
    this.isLoading.next(false);
  }
}
