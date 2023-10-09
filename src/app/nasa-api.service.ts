import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private apiUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=8v1JxargfrYToSSj9E3gWX43SaNIOvsMeJMOZoiD';
  private datepipe = new DatePipe('en-US');

  constructor(private http: HttpClient) { }

  getToday(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getDate(date: string): Observable<any> {
    let apiStr: string = this.apiUrl.concat("&date=").concat(date);
    return this.http.get(apiStr);
  }

  getYesterday(): Observable<any> {
    let todayDate = new Date();
    let yesterdayDate = new Date();
    let todayDayOfMonth = todayDate.getDate();
    yesterdayDate.setDate(todayDayOfMonth - 1);

    let dteFormat: string = String(this.datepipe.transform(yesterdayDate, 'yyyy-MM-dd'));
    let dateParam: string = "&date=".concat(dteFormat);
    let newDateurl: string = this.apiUrl.concat(dateParam);
    return this.http.get(newDateurl);
  }


}
