import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-yesterday',
  templateUrl: './yesterday.component.html',
  styleUrls: ['./yesterday.component.css']
})
export class YesterdayComponent implements OnInit {
  title = 'NASA IMAGE OF THE DAY';

  copyright: string = "";
  date: string = "";
  explanation: string = "";
  safeUrl: any;
  title_img: string = "";
  media_type: string = "";

  constructor(private api: NasaApiService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.api.getYesterday().subscribe(
      (response) => {
        console.log(response);
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
