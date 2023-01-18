import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  activeDisplay: boolean
  active: boolean
  constructor(private activeService: ActiveService) {
    this.active = false
    this.activeDisplay = true
  }

  ngOnInit(): void {
    this.activeService.active.subscribe((active: boolean) => {
      this.active = !active
    })

    this.activeService.activeDisplay.subscribe((activeDisplay: boolean) => {
      this.activeDisplay = activeDisplay
    })
  }

  openModal() {
    this.activeService.activeDisplay.emit(this.activeDisplay)
    this.activeDisplay = false
    console.log(this.activeDisplay)
  }

}


