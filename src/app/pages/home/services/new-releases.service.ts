import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { FormattedNewReleases, APINewReleases } from '../models/new-releases-model';
import { GlobalService } from 'src/app/services/global.service';

@Injectable()
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private globalService: GlobalService) {  }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.globalService.getQuery(this.newReleasesUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((
            { id, images, name, artists, type }: FormattedNewReleases) => (
            { id, images, name, artists, type }
          ));
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
