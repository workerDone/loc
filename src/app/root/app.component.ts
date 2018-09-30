import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
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
  constructor(
    public translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,

    ) {
    translate.setDefaultLang('en');

    setTimeout(() => {translate.use('uk'); } , 3000);
    this.matIconRegistry
    .addSvgIcon(
      'ico-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo/ico-logo.svg')
    )
    .addSvgIcon(
      'n',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo/1.svg')
    )
    .addSvgIcon(
      'motipio-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo/motipio-logo.svg')
    );
    this.matIconRegistry.registerFontClassAlias ('fa');
  }

}
