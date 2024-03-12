import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentCustom } from 'src/app/models/comment-custom.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-graphic-form',
  templateUrl: './graphic-form.component.html',
  styleUrls: ['./graphic-form.component.css']
})
export class GraphicFormComponent {
  graphicForm: FormGroup;
  cardService: CardService = inject(CardService);

  @Input() idG: number | null = null;
  @Output() newCommentAdded: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.graphicForm = this.formBuilder.group({
      author: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!(this.graphicForm.valid && this.idG !== null)) return;
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    const commentObj = {
      date: formattedDate,
      cards: this.idG,
      ...this.graphicForm.value
    }
    const newComment = new CommentCustom(commentObj);
    this.cardService.postComment(newComment).subscribe((value) => {
      this.graphicForm.reset();
      this.newCommentAdded.emit();
    });
  }
}

