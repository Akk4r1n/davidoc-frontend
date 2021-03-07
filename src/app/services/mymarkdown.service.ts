import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MymarkdownService {

  // TODO: get  the url from a config file
  markdownUrl = "http://192.168.178.89:8080/";

  constructor(private http: HttpClient) {}

  getMarkdown(path : string): Observable<string> {
    return this.http.get(this.markdownUrl + path, { responseType: 'text' });
  }

}
