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
    public  FreeNewMovieData;
    public  NewMovieData;
    public hotMovieData;
    constructor(public apiService: ApiService) { }

    ngOnInit() {
        this.hotMovieData = {
            subject_collection: {name: ''},
            subject_collection_items: []
        };
        this.apiService.theatreHot({}).subscribe(res => {
            this.hotMovieData = res;
        });
        this.apiService.theatreFreeNew({}).subscribe(res => {
            this.FreeNewMovieData = res;
        });
        this.apiService.theatreFreeNew({}).subscribe(res => {
            this.NewMovieData = res;
        });
    }

}
