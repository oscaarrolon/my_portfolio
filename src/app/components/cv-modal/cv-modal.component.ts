import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'cv-modal',
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.css']
})
export class CvModalComponent implements OnInit {

  activeDisplay: boolean

  constructor(private activeService: ActiveService) {
    this.activeDisplay = true
  }

  ngOnInit(): void {
    this.activeService.activeDisplay.subscribe((activeDisplay: boolean) => {
      this.activeDisplay = activeDisplay

    })
  }

  closeModal() {
    this.activeService.activeDisplay.emit(this.activeDisplay)
    this.activeDisplay = true
  }

}
