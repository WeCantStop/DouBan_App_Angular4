import { Component, OnInit } from '@angular/core';
import { FadeIn } from '../../animations/fadeIn.animation';
import { ApiService } from '../../services/doubanAPI';

@Component({
    selector: 'app-reserve',
    templateUrl: './reserve.component.html',
    styleUrls: ['./reserve.component.css'],
    animations: [FadeIn]
})
export class ReserveComponent implements OnInit {

    constructor(public apiService: ApiService) { }

    ngOnInit() {
        this.apiService.theatreHot({}).subscribe(res => {
            console.log(res);
        });
        this.apiService.theatreFreeNew({}).subscribe(res => {
            console.log(res);
        });
        this.apiService.theatreNew({}).subscribe(res => {
            console.log(res);
        });
    }

}
