import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../interfaces/folder';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  // url for the backend endpoint to get the folder structure
  // TODO: get the url and port from a config file
  documentationUrl = "http://185.232.71.203:8080/doc";

  constructor(private http: HttpClient) { }

  getDocumentation(): Observable<Folder> {
    return this.http.get<Folder>(this.documentationUrl, { responseType: 'json' })
  }

}
