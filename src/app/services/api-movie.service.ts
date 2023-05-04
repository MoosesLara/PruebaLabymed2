import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiMovieService {

  private apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=95cdca84";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
