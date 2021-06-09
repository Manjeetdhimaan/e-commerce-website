
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width :string = "1349px";
  images = [1].map((n) => `../../../assets/images/demos/demo-12/slider/slide-${n}.jpg`);
  showNavigationArrows=false;
  showNavigationIndicators=false;
  
  ngOnInit() {
  }
  
  @HostListener('window:resize', ['$event'])
	onResize(event:any) {
		this.width = event.target.innerWidth +"px";
	}
}



