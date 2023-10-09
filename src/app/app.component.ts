import { Component, OnInit } from '@angular/core';
import { NasaApiService } from './nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NASA IMAGE OF THE DAY';

  date: string = "";

  constructor(private api: NasaApiService) { }

  ngOnInit() {
    this.api.getToday().subscribe(
      (response) => {
        console.log(response);
        this.date = response['date'];
      },
      (error) => { console.log(error); }
    );
  }
}
