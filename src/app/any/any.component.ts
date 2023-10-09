import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaApiService } from '../nasa-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.css']
})
export class AnyComponent implements OnInit {

  date: string | null = "";
  copyright: string = "";
  explanation: string = "";
  safeUrl: any;
  title_img: string = "";
  media_type: string = "";

  constructor(
    private route: ActivatedRoute,
    private api: NasaApiService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.date = String(this.route.snapshot.paramMap.get('date'));
    console.log(this.date);

    this.api.getDate(this.date).subscribe(
      (response) => {
        // console.log(response)
        this.date = response['date'];
        this.media_type = response['media_type'];
        this.copyright = response['copyright'];
        this.explanation = response['explanation'];
        let url = response['url'];
        this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
        this.title_img = response['title'];
      },
      (error) => { console.log(error); }
    );
  }

}
