import { HeaderComponent } from './../../common/header/header.component';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Http} from '@angular/http';

import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from '../../translate/translateLoader';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonsModule } from './../../common/commons.module';
import { NavTabComponent } from '../../common/nav-tab/nav-tab.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        CommonsModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
