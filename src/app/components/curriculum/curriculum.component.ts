import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  active: boolean
  constructor(private activeService: ActiveService) {
    this.active = false
  }

  ngOnInit(): void {
    this.activeService.active.subscribe((active: boolean) => {
      this.active = !active
    })
  }

}


