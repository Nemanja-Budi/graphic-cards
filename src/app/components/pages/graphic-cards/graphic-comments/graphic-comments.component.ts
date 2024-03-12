import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommentCustom } from 'src/app/models/comment-custom.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-graphic-comments',
  templateUrl: './graphic-comments.component.html',
  styleUrls: ['./graphic-comments.component.css']
})
export class GraphicCommentsComponent implements OnInit, OnChanges{
  @Input() id: number | null = null;
  cardService: CardService = inject(CardService);
  comments: Observable<CommentCustom[]> = new Observable<CommentCustom[]>();

  onGetAddedComment(): void {
    this.onGetComments();
  }

  onGetComments(): void {
    if(this.id !== null) {
      this.comments = this.cardService.getComments(this.id).pipe(map((value) => value.results));    
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && !changes['id'].firstChange) {
      this.onGetComments();
    }
  }

  ngOnInit(): void {
    this.onGetComments();
  }

}
