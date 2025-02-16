import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-guest',
  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './header-guest.component.html',
  styleUrl: './header-guest.component.css'
})
export class HeaderGuestComponent {

}
