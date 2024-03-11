import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CardList } from '../models/card-list.model';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { CommentList } from '../models/comment-list.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardID: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  getCardID() {
    console.log('a ja?')
    return this.cardID.asObservable();
  }

  ubdateCardID(id: number) {
    console.log('i ja')
    this.cardID.next(id);
  }

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardList> {
    return this.http.get<CardList>(`http://localhost:3000/api/cards`).pipe(map((card) => {
      return card;
    }));
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(`http://localhost:3000/api/cards/${id}/comments`).pipe(map((comment) => {
      return comment;
    }));
  }
}
