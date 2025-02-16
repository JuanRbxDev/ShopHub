import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FooterComponent, 
    HeaderComponent, 
    LoginComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShopHub';
  

  
  isVisibleLogin = false

  viewLogin() {
    this.isVisibleLogin = true;
  }

  closeLogin() {
    this.isVisibleLogin = false;
  }


}
