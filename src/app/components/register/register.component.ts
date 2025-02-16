import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  closeRegister() {
    this.close.emit();
  }

  goToLogin() {
    this.switchToLogin.emit(); // Cambiar a login
  }
}
