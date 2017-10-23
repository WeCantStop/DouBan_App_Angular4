import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ HeaderComponent, NavTabComponent ],
    exports: [
        HeaderComponent,
        NavTabComponent
    ]
})
export class CommonsModule {
}
