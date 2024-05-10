import { Component } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { NgFor, DatePipe , NgIf} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [NgFor, DatePipe, NgIf, RouterModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent {
  commentList: Comment[] = [
    {
      id: 1,
      title: 'Comment 1',
      createdby: 'John Doe',
      createdat: new Date(),
      text: 'Comment by John Doe',
    },
    {
      id: 2,
      title: 'Comment 2',
      createdby: 'Jane Doe',
      createdat: new Date(),
      text: 'Comment by Jane Doe',
    },
    {
      id: 3,
      title: 'Comment 3',
      createdby: 'John Doe',
      createdat: new Date(),
      text: 'Comment 2 by John Doe',
    },
  ];
}
