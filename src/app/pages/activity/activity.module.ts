import { HeaderComponent } from './../../common/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Http} from '@angular/http';

import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from '../../translate/translateLoader';

import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity.routing';
import { CommonsModule } from './../../common/commons.module';


@NgModule({
    imports: [
        CommonModule,
        ActivityComponent,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        CommonsModule
    ],
    declarations: [ActivityComponent]
})
export class HomeModule {
}
