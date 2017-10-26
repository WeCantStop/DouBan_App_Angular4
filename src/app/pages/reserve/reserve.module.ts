import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRoutingModule } from './reserve.routing.module';

import { ReserveComponent } from './reserve.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';
import { CommonsModule } from '../../common/commons.module';

@NgModule({
  imports: [
    CommonModule,
    ReserveRoutingModule,
    CommonsModule
  ],
  declarations: [ ReserveComponent, MovieDetailComponent ]
})
export class ReserveModule { }
