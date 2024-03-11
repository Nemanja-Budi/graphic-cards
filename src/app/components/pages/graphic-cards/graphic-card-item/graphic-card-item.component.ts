import { Component, Input, inject } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-graphic-card-item',
  templateUrl: './graphic-card-item.component.html',
  styleUrls: ['./graphic-card-item.component.css']
})
export class GraphicCardItemComponent {
  @Input() card: Card = new Card();
  cardService: CardService = inject(CardService)

  onHedLineClicked(id: number): void {
    console.log('pozivam se');
    this.cardService.ubdateCardID(id);
  }
}
