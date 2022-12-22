import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {
  token: string | null;
  
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  public getQuery(query: string) : Observable<any[]> {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any[]>(url, { headers });
  }
}
