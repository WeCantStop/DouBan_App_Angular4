import { ApiService } from './../../../services/doubanAPI';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childpage',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movieDetailData = {
    images: {
      medium: ''
    }
  };
  constructor(public route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          if (params.id){
            this.apiService.movieDetail(params.id).subscribe(res => {
              console.log(res);
              this.movieDetailData = res;
            });
          }
      });
  }

}
