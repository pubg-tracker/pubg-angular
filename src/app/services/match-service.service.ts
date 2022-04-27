import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'http://localhost:8080';
const pubgAPI = 'https://api.pubg.com/tournaments';
const API_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlMGQ5MjkwMC04YmY4LTAxM2EtNGI4Yi01ZmNkODM1NzQ2MTIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjQ3OTQ0OTY4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InN0YWNrcm91dGUtcHViIn0.dKViHTErgRDJr2IqvOhhMVaqWQFNH-tswqbM7DM-v_U';

@Injectable({
    providedIn: 'root'
})

export class MatchService {

    public favMatches = new BehaviorSubject<any>([]);

    constructor(private http: HttpClient) { }

    getFavMatchesSubject() {
        return this.favMatches;
    }

    getAllFavouriteMatches(userId: string): Observable<any> {
        return this.http.get(`${endpoint}/favMatch/${userId}`);
    }

    getAllTournaments() {
        return this.http.get(`${pubgAPI}`, {
            headers: {
                'Authorization': API_TOKEN,
                'Accept': 'application/vnd.api+json'
            }
        })
    }

    getAllMatchesInTournament(tournamentId: string) {
        return this.http.get(`${pubgAPI}/${tournamentId}`, {
            headers: {
                'Authorization': API_TOKEN,
                'Accept': 'application/vnd.api+json'
            }
        })
    }

    getAllParticipants(matchId: string) {
        const matchAPI = `https://api.pubg.com/shards/tournament/matches/${matchId}`;
        return this.http.get(matchAPI, {
            headers: {
                'Authorization': API_TOKEN,
                'Accept': 'application/vnd.api+json'
            }
        })
    }

    addToFav(match: any) {
        return this.http.post(`${endpoint}/addFav`, match, { responseType: 'text' });
    }

    deleteFromFav(userId: string) {
        return this.http.delete(`${endpoint}/deleteFav/${userId}`, { responseType: 'text' });
    }

}