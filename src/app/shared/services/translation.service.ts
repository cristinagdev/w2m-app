import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
    console.log(this.translateService.currentLang);

   }

   translate(message: string) {
    return this.translateService.get(message);
  }
}
