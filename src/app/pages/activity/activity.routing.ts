import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ActivityComponent } from './activity.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class ActivityRoutingModule {
}
