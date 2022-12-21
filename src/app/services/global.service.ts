import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {

  constructor(private http: HttpClient) { }

  public getQuery(query: string) : Observable<any[]> {
    // 
    const url: string = `https://api.spotify.com/v1/${query}`;

    // 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBLxA5nOyn-QKnH0T17vqlTUTSbHOeK91-TMkGBznRuuBc7QEj8OKpyeG0bxM9R5IntNYdgN84OdN_DkBza91Zbb1zKrUaj2jNmBj-QQlPv0O8J1SrqY__Vni7-CESsvpixmP2iZdQWUKm7OIz9TC3xVjjr-PanPJe2P3_NIgDqDrem0O5J7yxxtEYLe0CqBGRB3VoGmIZZQIkEFw'
    });

    // 
    return this.http.get<any[]>(url, { headers });
  }
}
