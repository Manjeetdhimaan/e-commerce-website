import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'new-shop';
  
  constructor() {}

  toggleMobileMenu = false;
  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
  }

  change(value: number): void {
    console.log(value);
}

public value: number = 30;
public rangevalue: Number[] = [30,70];
public mintype: string = 'MinRange';
public rangetype: string = 'Range';
}
