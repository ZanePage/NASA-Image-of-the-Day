import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  title = 'NASA IMAGE OF THE DAY';

  copyright: string = "";
  date: string = "";
  explanation: string = "";
  safeUrl: any;
  media_type: string = "";
  title_img: string = "";

  constructor(private api: NasaApiService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.api.getToday().subscribe(
      (response) => {
        this.date = response['date'];
        this.copyright = response['copyright'];
        this.explanation = response['explanation'];
        let url = response['url'];
        this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
        this.title_img = response['title'];
        this.media_type = response['media_type'];
      },
      (error) => { console.log(error); }
    );
  }


}
