import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$: BehaviorSubject<boolean>;

  constructor(private spinnerService: SpinnerService){
    this.isLoading$ = this.spinnerService.isLoading$;

  }


}
