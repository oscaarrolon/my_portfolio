import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActiveService } from '../../services/active.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  active: boolean

  constructor(private activeService: ActiveService) {
    this.active = true

  }

  ngOnInit() {

  }

  toggleMenu() {
    this.active = !this.active
    this.activeService.active.emit(this.active)

  }


}
