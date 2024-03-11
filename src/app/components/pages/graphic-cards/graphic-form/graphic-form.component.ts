import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-graphic-form',
  templateUrl: './graphic-form.component.html',
  styleUrls: ['./graphic-form.component.css']
})
export class GraphicFormComponent {
  graphicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.graphicForm = this.formBuilder.group({
      // _id: [0],
      name: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.graphicForm.valid) return;
    console.log(this.graphicForm.value);
  }
}


// ,private petService: PetService,private activatedRoute: ActivatedRoute