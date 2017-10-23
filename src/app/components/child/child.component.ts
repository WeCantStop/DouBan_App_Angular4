import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() account: string;
    @Output() send: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild ('testRef')
        testRef: ElementRef;
    name = 'Tom';
    age = 18;
    childName: string;

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.testRef.nativeElement, 'background-color', 'yellowgreen');
    }

    sendToParent() {
        const data = {
            name: this.name,
            age: this.age
        };
        this.send.emit(data);
    }

}
