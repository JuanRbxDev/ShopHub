import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { CommonModule } from '@angular/common';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-header-guest',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LoginComponent,
    CommonModule,
    RegisterComponent
  ],
  templateUrl: './header-guest.component.html',
  styleUrl: './header-guest.component.css'
})
export class HeaderGuestComponent {
  isVisibleFormLogin = false;
  isVisibleFormRegister = false;

  openFormLogin() {
    this.isVisibleFormLogin = true;
    this.isVisibleFormRegister = false; // Asegurar que el de registro esté cerrado
  }

  openFormRegister() {
    this.isVisibleFormRegister = true;
    this.isVisibleFormLogin = false; // Asegurar que el login esté cerrado
  }

  closeForms() {
    this.isVisibleFormLogin = false;
    this.isVisibleFormRegister = false;
  }
}