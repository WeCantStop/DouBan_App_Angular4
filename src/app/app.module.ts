import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/** WeUi **/
import { WeUiModule } from 'ngx-weui';

/** 路由 **/
import { AppRouterModule } from './router';

/** 翻译 **/
import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './translate/translateLoader';

/** 视图组件 **/
import { AppComponent } from './app.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { MyComponent } from './pages/my/my.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';

/** 属性指令组件 **/
import { showConsoleDirective } from './attribute-directives/show-console.directive';

/** Service **/
import { GetPersonsService } from './services/getPersons';
import { UserService } from './services/userService';
import { ApiService } from './services/doubanAPI';

@NgModule({
    declarations: [
        AppComponent,
        ActivityComponent,
        MyComponent,
        UserInfoComponent,
        showConsoleDirective,
        PageNotFoundComponentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        WeUiModule.forRoot()
    ],
    exports: [
    ],
    providers: [
        GetPersonsService,
        UserService,
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
