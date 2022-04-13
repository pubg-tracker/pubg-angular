import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player';

const endpoint = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})

export class PlayerService {

    public favMatches = new BehaviorSubject<any>([]);

    constructor(private http: HttpClient) { }

    addFavPlayer(player: Player) {
        return this.http.post(`${endpoint}/addPlayer`, player, { responseType: 'text' });
    }

    deleteFavPlayer(playerId: string) {
        return this.http.delete(`${endpoint}/deletePlayer/${playerId}`, { responseType: 'text' });
    }

    getGlobalPlayers() {
        return this.http.get(`${endpoint}/getGlobalPlayers`);
    }

    getFavPlayer(userId: string) {
        return this.http.get(`${endpoint}/getFavPlayers/${userId}`);
    }

}