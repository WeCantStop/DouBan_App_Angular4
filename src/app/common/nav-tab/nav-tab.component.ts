import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-tab',
    templateUrl: './nav-tab.component.html',
    styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {
    @Input() index: string;
    private selectedNav: string;

    constructor(private router: Router) {
    }

    navs = [
        {index: '1', text: '首页', target: 'home', icon: 'icon-home-border'},
        {index: '2', text: '电影', target: 'reserve', icon: 'icon-reserve-border'},
        {index: '3', text: '图书', target: 'activity', icon: 'icon-activity-border'},
        {index: '4', text: '广播', target: 'find', icon: 'icon-find-border'},
        {index: '5', text: '小组', target: 'person', icon: 'icon-person-border'}
    ];

    ngOnInit() {
    }

    selectNav(target) {
        this.navs.forEach(item => {
            if (item.target === target) {
                item.icon = `icon-${target}-full`;
            } else {
                item.icon = `icon-${item.target}-border`;
            }
        });
        this.router.navigate([target]);
    }

}
