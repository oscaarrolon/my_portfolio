import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  active: EventEmitter<boolean>
  activeDisplay: EventEmitter<boolean>

  constructor() {
    this.active = new EventEmitter();
    this.activeDisplay = new EventEmitter();
  }
}
