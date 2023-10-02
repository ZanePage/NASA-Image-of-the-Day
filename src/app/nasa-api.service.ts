import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  apiUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=8v1JxargfrYToSSj9E3gWX43SaNIOvsMeJMOZoiD';

  constructor(private http: HttpClient) { }

  getPost(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
