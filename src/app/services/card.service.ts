import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CardList } from '../models/card-list.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommentList } from '../models/comment-list.model';
import { Card } from '../models/card.model';
import { CommentCustom } from '../models/comment-custom.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }
  private cardID: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  getCardID() {
    return this.cardID.asObservable();
  }

  ubdateCardID(id: number) {
    this.cardID.next(id);
  }

  getCards(params?:any): Observable<CardList> {
    let options = {}
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || 1)
          .set('pageSize', params.pageSize || 5)
          // .set('sort', params.sort || "")
          // .set('sortDirection', params.sortDirection || "")
          // .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get<CardList>(`http://localhost:3000/api/cards`,options).pipe(map((card) => {
      return card;
    }));
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(`http://localhost:3000/api/cards/${id}/comments`).pipe(map((comment) => {
      return comment;
    }));
  }

  updateGrade(updatedCard: Card): Observable<Card> {
    return this.http.put<Card>(`http://localhost:3000/api/cards/${updatedCard._id}`, updatedCard);
  }

  postComment(newComment: CommentCustom): Observable<CommentCustom> {
    return this.http.post<CommentCustom>(`http://localhost:3000/api/cards/${newComment.cards}/comments`, newComment);
  }
}
