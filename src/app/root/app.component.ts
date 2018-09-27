import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = {
    name : 'loc',
    age : 42,
  };
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    setTimeout(() => {translate.use('uk'); } , 3000);
  }

}
