import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReserveComponent} from './reserve.component';
import {ChildpageComponent} from './childpage/childpage.component';

const routes: Routes = [
    {
        path: '',
        component: ReserveComponent,
        children: [
            {path: 'child', component: ChildpageComponent},
            {path: '', redirectTo: 'child', pathMatch: 'full'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class ReserveRoutingModule {
}
