import { Injectable } from '@angular/core';
import { PERSONS } from '../mock/persons';
import { Person } from '../mock/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataType } from '../mock/mockData';

@Injectable()

export class GetPersonsService {
    /** 设置请求头 **/
    headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    constructor(private http: HttpClient, private https: Http) {
    }

    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }

    getDataByGet(): Observable<DataType> {
        /**
         * 每次 operator 都会返回一个新的 Observable, 且最终只有一个Observable 会被订阅
         */
        return this.https.get('http://localhost:3008/users/age').map(res => res.json());
    }
}
