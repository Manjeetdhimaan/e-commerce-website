import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menuFocus?: ElementRef;
  @ViewChild('searchInput') searchInput?: ElementRef;
  toggleMobileMenu = false;
  searchToggle = false;
  hover = false
  @Output() mobileMenuClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
    this.mobileMenuClose.emit(null);
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle
    var focus = this.searchInput?.nativeElement
    setTimeout(() => {// this will make the execution after the above boolean has changed;
      focus.focus();
    }, 0);

  }
  hoverToggle() {
    this.hover = !this.hover;
  }
}

