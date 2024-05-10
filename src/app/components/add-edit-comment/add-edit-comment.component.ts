import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Comment } from '../../interfaces/comment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-edit-comment',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './add-edit-comment.component.html',
  styleUrl: './add-edit-comment.component.css',
})
export class AddEditCommentComponent {
  addNewComment: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addNewComment = this.formBuilder.group({
      title: ['', Validators.required],
      createdby: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  AddComment() {
    const comment: Comment = {
      title: this.addNewComment.value.title,
      createdby: this.addNewComment.value.createdby,
      createdat: new Date(),
      text: this.addNewComment.value.comment,
    }
    console.log(comment);
  }
}
