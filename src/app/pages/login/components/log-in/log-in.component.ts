import { Component, OnInit } from '@angular/core';
import {plainToClass, Type} from 'class-transformer';

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
  constructor() { }

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

}
