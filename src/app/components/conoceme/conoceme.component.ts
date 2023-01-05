import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-conoceme',
  templateUrl: './conoceme.component.html',
  styleUrls: ['./conoceme.component.css']
})
export class ConocemeComponent implements OnInit {
  active: boolean

  constructor(private activeService: ActiveService) {
    this.active = false
  }

  ngOnInit() {
    this.activeService.active.subscribe((active: boolean) => {
      this.active = !this.active
    })
  }
}
