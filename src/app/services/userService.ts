import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(private http: HttpClient, private https: Http) {
    }

    addUser(data): Observable<any> {
        /**
         * req: {name: ""}
         */
        // express
        // return this.https.post('http://localhost:3008/users/addUser', data).map(res => res.json());

        // koa2
        return this.https.post('http://localhost:3001/test/connect', data).map(res => res.json());
    }

    getUsers(data): Observable<any> {
        // express
        // return this.https.post('http://localhost:3008/users/getUser', data).map(res => res.json());

        // koa2
        return this.https.post('http://localhost:3001/test/getUser', data).map(res => res.json());
    }

    updateUserDeatil(data): Observable<any> {
        return this.https.post('http://localhost:3001/test/updateUserDetail', data).map(res => res.json());
    }

    delUser(data): Observable<any> {
        // express
        // return this.https.post('http://localhost:3008/users/delUser', data).map(res => res.json());

        // koa2
        return this.https.post('http://localhost:3001/test/delUser', data).map(res => res.json());
    }
}
