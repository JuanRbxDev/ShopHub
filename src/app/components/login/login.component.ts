import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  @Output() close = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>();

  closeLogin() {
    this.close.emit();
  }

  goToRegister() {
    this.switchToRegister.emit(); // Cambiar a registro
  }

}
