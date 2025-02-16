import { Component } from '@angular/core';
import { HeaderGuestComponent } from "../header-guest/header-guest.component";

@Component({
  selector: 'app-header',
  imports: [HeaderGuestComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
