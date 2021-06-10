import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-shop';
  toggleMobileMenu = false;
  mobileMenuToggle(){
    this.toggleMobileMenu =  !this.toggleMobileMenu 
  }
}
