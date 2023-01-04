import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  active: boolean

  constructor(private activeService: ActiveService) {
    this.active = false
  }

  ngOnInit() {

    this.activeService.active.subscribe((active: boolean) => {
      this.active = !active
    })

  }

}
