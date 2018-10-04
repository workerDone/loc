import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [LogInComponent]
})
export class LoginModule { }
