import { Component, OnInit } from '@angular/core';
import { GetPersonsService } from '../../services/getPersons';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    public resData;

    constructor(private getPersonService: GetPersonsService, private http: HttpClient) {
    }

    ngOnInit() {
        this.resData = {};
        this.getPersonService.getPersons().then(res => {
        }, res => {
            console.log(res);
        });
    }

    // post请求方式
    getDataByPost() {
        this.http.get('http://localhost:3008/users/age').subscribe(
            (val) => {
                console.log(val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {

            });
    }

    // get请求方式
    getDataByGet() {
        this.getPersonService.getDataByGet()
            .subscribe(res => {
                console.log(res.data);
                this.resData = res.data;
            });
    }
}
