import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [LogInComponent]
})
export class LoginModule { }
