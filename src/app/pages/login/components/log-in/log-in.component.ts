import { Component, OnInit } from '@angular/core';
import {plainToClass, Type} from 'class-transformer';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import {validate} from 'class-validator';

import { ContactEmailFormDto } from './validators/contactEmailFormDto';
export class Album {

  id: number;

  name: string;

  @Type(() => Photo)
  photos: Photo[];
}


export class Photo {
  id: number;
  filename: string;
}



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  data: Album;
  form: DynamicFormGroup<ContactEmailFormDto>;
  private readonly _fb = new DynamicFormBuilder();
  constructor() {
    this._buildForm();
   }

  ngOnInit() {
    const newData = {
      id: 36,
      filename: 'Ping',
      photos: [
        {
          id: 78,
          filename: 'box'
        },
        {
          id: 77,
          filename: 'box-77'
        },
        {
          id: 79,
          filename: 'box-79'
        }
      ]
    };
    this.data = plainToClass(Album, newData);
    console.log(this.data)
  }

 async sendEmail() {
   const error = await validate(this.form.object);
    console.log(error);
  }
  private _buildForm(): void {
      this.form = this._fb.group(ContactEmailFormDto, {
        email: '',
        phone_number: '',
        phone_ext: '',
        subject: '',
        description: ''
      });
  }

}
