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
  isShowen: boolean = false;

  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

  onHedLineClicked(id: number): void {
    this.cardService.ubdateCardID(id);
  }

  updateGrade(card: Card, newGrade: number): void {
    card.grade += newGrade;
    console.log(card.grade);
    const updatedCard: Card = {
      ...card,
      grade: card.grade
    }
    this.cardService.updateGrade(updatedCard).subscribe((value) => {
      console.log(value);
    });
  }
}
