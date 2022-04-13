import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'http://localhost:8080';


@Injectable({
    providedIn: 'root'
})

export class MatchService {

    constructor(private http: HttpClient) { }

    getAllFavouriteMatches(userId: string): Observable<any> {
        return this.http.get(`${endpoint}/favMatch/${userId}`);
    }

}