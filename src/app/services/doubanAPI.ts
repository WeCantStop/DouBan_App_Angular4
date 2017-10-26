import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class ApiService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(
        private http: Http) { }

    initData(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/index', data).map(res => res.json());
    }

    broadcastList(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/broadcast', data).map(res => res.json());
    }

    groupList(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/group', data).map(res => res.json());
    }

    // 电影: theatreHot  theatreFreeNew theatreNew

    theatreHot(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/theatreHot', data).map(res => res.json());
    }

    theatreFreeNew(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/theatreFreeNew', data).map(res => res.json());
    }

    theatreNew(data): Observable<any> {
        return this.http.post('http://localhost:3001/api/theatreNew', data).map(res => res.json());
    }

    movieDetail(id): Observable<any> {
        return this.http.post('http://localhost:3001/api/movieDetail', {id: id}).map(res => res.json());
    }
}
