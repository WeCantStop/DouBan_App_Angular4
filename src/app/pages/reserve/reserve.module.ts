import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRoutingModule } from './reserve.routing.module';

import { ReserveComponent } from './reserve.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { CommonsModule } from './../../common/commons.module';

@NgModule({
  imports: [
    CommonModule,
    ReserveRoutingModule,
    CommonsModule
  ],
  declarations: [ ReserveComponent, ChildpageComponent ]
})
export class ReserveModule { }
