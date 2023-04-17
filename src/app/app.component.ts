import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'w2m-technical-test';
  languages: any[] = [
    {
    name:'SPANISH',
    selected: false,
  },
  {
    name: 'ENGLISH',
    selected: false
  }
];


  constructor(private translateService: TranslateService, private renderer: Renderer2){

    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang', 'es');
    }

    this.translateService.setDefaultLang(localStorage.getItem('lang')!);
    this.translateService.use(localStorage.getItem('lang')!);

    this.changeSelectedChip();
  }

  private changeSelectedChip(): void {
    this.languages.map((lang)=> {

      const localSt= localStorage.getItem('lang')

      if((localSt === 'en' && lang.name ==='ENGLISH') || (localSt === 'es' && lang.name ==='SPANISH')) {
        lang.selected= true;
      }

    })
  }


  changeLanguage(lang: any): void {
    if(lang.name === 'SPANISH'){
      localStorage.setItem('lang', 'es');
    }else {
      localStorage.setItem('lang', 'en');
    }

    this.translateService.use(localStorage.getItem('lang')!)

  }
}
