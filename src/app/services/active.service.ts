import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  active: EventEmitter<boolean>

  constructor() {
    this.active = new EventEmitter();
  }
}
