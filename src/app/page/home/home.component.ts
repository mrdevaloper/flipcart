import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurosilComponent } from '../../unit/curosil/curosil.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurosilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
