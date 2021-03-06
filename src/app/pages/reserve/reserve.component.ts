import { Component, OnInit } from '@angular/core';
import { FadeIn } from '../../animations/fadeIn.animation';
import { ApiService } from '../../services/doubanAPI';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reserve',
    templateUrl: './reserve.component.html',
    styleUrls: ['./reserve.component.css'],
    animations: [FadeIn]
})
export class ReserveComponent implements OnInit {
    public  freeNewMovieData;
    public  newMovieData;
    public hotMovieData;
    constructor(public apiService: ApiService, public route: Router) { }

    ngOnInit() {
        this.hotMovieData = {
            subject_collection: {name: ''},
            subject_collection_items: []
        };
        this.freeNewMovieData = {
            subject_collection: {name: ''},
            subject_collection_items: []
        };
        this.newMovieData = {
            subject_collection: {name: ''},
            subject_collection_items: []
        };
        this.apiService.theatreHot({}).subscribe(res => {
            this.hotMovieData = res;

            this.hotMovieData.subject_collection_items.forEach( element => {
                if (!element.rating){
                    element.rating = {
                        value: '暂无评分'
                    };
                }else {
                    element.rating.value = `评分: ${element.rating.value}`;
                }
            });
        });
        this.apiService.theatreFreeNew({}).subscribe(res => {
            this.freeNewMovieData = res;
        });
        this.apiService.theatreNew({}).subscribe(res => {
            this.newMovieData = res;
        });
    }

    movieDetail(id) {
        this.route.navigate(['reserve/movieDetail', id]);
    }
}
