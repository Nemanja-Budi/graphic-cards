import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css']
})
export class GraphicCardsComponent implements OnInit {
  queryParams = {
    page: 1,
    pageSize: 5,
  }
  cardService: CardService = inject(CardService);
  cards: Observable<Card[]> = this.cardService.getCards().pipe(map((card) => card.results));
  cardID: number | null = null;

  ngOnInit(): void {
    this.cardService.getCardID().subscribe((value) => {
      this.cardID = value;
      this.cards = this.cardService.getCards(this.queryParams).pipe(map((card) => card.results));
    });
  }
}
