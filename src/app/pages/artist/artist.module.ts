import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist-component/artist.component';
import { ArtistTopTrackComponent } from './artist-top-track/artist-top-track.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';

import { ArtistService } from './services/artist.service';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedTranslate } from '../shared/translate/sharedTranslate.module';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistTopTrackComponent,
    ArtistAlbumsComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    PipesModule,
    HttpClientModule,
    SharedTranslate
  ],
  providers: [
    ArtistService,
  ]
})
export class ArtistModule { }
