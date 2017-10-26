import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReserveComponent} from './reserve.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';

const routes: Routes = [
    {
        path: '',
        component: ReserveComponent
    },
    {
        path: 'movieDetail/:id', component: MovieDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class ReserveRoutingModule {
}
