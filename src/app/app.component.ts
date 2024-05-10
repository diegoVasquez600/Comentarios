import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommentListComponent } from "./components/comment-list/comment-list.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommentListComponent, NavbarComponent, RouterModule, ReactiveFormsModule]
})
export class AppComponent {
  title = 'Comentarios';
}
