import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { CommentCustom } from 'src/app/models/comment-custom.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-graphic-comments',
  templateUrl: './graphic-comments.component.html',
  styleUrls: ['./graphic-comments.component.css']
})
export class GraphicCommentsComponent implements OnInit {

  cardService: CardService = inject(CardService);
  @Input() idProba: number | null = null;
  comments: CommentCustom[] = [];
  co: Observable<CommentCustom[]> = new Observable<CommentCustom[]>();

  onGetComments(): void {
    // if (this.idProba === null) return;
    // this.cardService.getComments(this.idProba).subscribe((value) => {
    //   this.comments = value.results
    // });
    if (this.idProba === null) return;
    this.co = this.cardService.getComments(this.idProba).pipe(map((v) => v.results));
  }

  ngOnInit(): void {
    this.onGetComments();
  }
}
