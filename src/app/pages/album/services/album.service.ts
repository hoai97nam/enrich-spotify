import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { APIAlbums } from '../models/album-model';
import { GlobalService } from 'src/app/services/global.service';

@Injectable()
export class AlbumService {

  constructor(private globalService: GlobalService) {  }

  // get album info
  public getAlbum(albumId: string): Observable<APIAlbums> {
    const albumUrl: string = `albums/${ albumId }`;

    return this.globalService.getQuery(albumUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
