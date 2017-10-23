import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { FadeIn } from '../../animations/fadeIn.animation';

@Component({
    selector: 'app-reserve',
    templateUrl: './reserve.component.html',
    styleUrls: ['./reserve.component.css'],
    animations: [FadeIn]
})
export class ReserveComponent implements OnInit, AfterViewInit {
    @ViewChild('tpl')
    tpl: TemplateRef<any>;
    @ViewChild('tpl', { read: ViewContainerRef })
    tplVcRef: TemplateRef<any>;
    name: string;
    age: string;
    childName = 'hello,Child';

    itemGroup: any = [
        [
            {
                label: 'Item1',
                value: 1
            },
            {
                label: 'Item2 (Disabled)',
                disabled: true,
                value: 2
            },
            {
                label: 'Item3',
                value: 3
            },
            {
                label: 'Item4',
                value: 4
            },
            {
                label: 'Item5',
                value: 5
            }
        ]
    ];

    constructor(private route: Router) { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.tplVcRef.createEmbeddedView(this.tpl);
    }

    getData(data) {
        this.name = data.name;
        this.age = data.age;
    }

    goChildPage() {
        this.route.navigateByUrl('reserve/child');
    }

}
