import { Routes } from '@angular/router';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { SeeCommentComponent } from './components/see-comment/see-comment.component';

export const routes: Routes = [
  { path: '', component: CommentListComponent },
  { path: 'addComment', component: AddEditCommentComponent },
  { path: 'editComment/:id', component: AddEditCommentComponent },
  { path: 'seeComment/:id', component: SeeCommentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
