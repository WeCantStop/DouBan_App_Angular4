import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'windows';

    // translate: TranslateService;
    constructor(private translate: TranslateService) {
        // this.translate = translate;
        // this.translate.setDefaultLang('zh_CN');
        // this.translate.use('zh_CN');
    }

    ngOnInit() {
        this.translate.setDefaultLang('zh_CN');
        this.translate.use('zh_CN');
    }
}
