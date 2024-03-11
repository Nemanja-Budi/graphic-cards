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

  cardService: CardService = inject(CardService);
  cards: Observable<Card[]> = this.cardService.getCards().pipe(map((card) => card.results));
  cardID: number | null = null;

  ngOnInit(): void {
    this.cardService.getCardID().subscribe((value) => {
      this.cardID = value;
      console.log(value);
    });
  }
}

// this.cardService.getCardID().subscribe((value) => {
//   this.cardID = value;
//   console.log(value);
// });