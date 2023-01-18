import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActiveService } from '../../services/active.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isActive: boolean

  constructor(private activeService: ActiveService) {
    this.isActive = true

  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActive = !this.isActive
    this.activeService.active.emit(this.isActive)

  }

  hideMenu() {
    this.isActive = !this.isActive
    this.activeService.active.emit(this.isActive)
  }
  windowWidth() {
    if (window.innerWidth < 800) {
      this.isActive = !this.isActive
      this.activeService.active.emit(this.isActive)
    }
  }
}


