import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumService } from './services/album.service';

import { PipesModule } from 'src/app/pipes/pipes.module';
import { AlbumComponent } from './album-component/album-component.component';
import { AlbumRoutingModule } from './album.routing.module';

@NgModule({
  declarations: [
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    PipesModule,
  ],
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
