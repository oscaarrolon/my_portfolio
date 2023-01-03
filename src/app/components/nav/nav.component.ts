import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  active: boolean

  constructor() {
    this.active = true

  }

  ngOnInit() {

  }

  toggleMenu() {
    this.active = !this.active
  }


}
