import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from './config/index';

@Component({
  selector: 'cenfo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor( private translateService: TranslateService ){
    this.translateService.setDefaultLang(CONFIG.defaultLang);
  }
}
