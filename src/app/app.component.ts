import { Component, OnInit } from '@angular/core';
import { NasaApiService } from './nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NASA IMAGE OF THE DAY';

  copyright: string = "";
  date: string = "";
  explanation: string = "";
  url: string = "";
  title_img: string = "";

  constructor(private api: NasaApiService) { }

  ngOnInit() {
    this.api.getPost().subscribe(
      (response) => {
        console.log(response);
        this.date = response['date'];
        this.copyright = response['copyright'];
        this.explanation = response['explanation'];
        this.url = response['hdurl'];
        this.title_img = response['title'];
      },
      (error) => { console.log(error); }
    );
  }
}
