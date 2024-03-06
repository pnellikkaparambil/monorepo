import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '@monorepo/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-angular';

  constructor() {
    const user: User = {
      name: 'John Doe',
      age: 25,
      email: '',
    };
  }
}
