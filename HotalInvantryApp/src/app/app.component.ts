import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Hotal-root',//Hotal is prifix in angular.json file and root is the html
  standalone: true,
  imports: [RoomsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HotalInvantryApp';

  role = 'User';
}
