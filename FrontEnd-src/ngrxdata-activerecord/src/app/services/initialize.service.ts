import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitializeService {
  state : number = 0;
  constructor() { }

  get_status():number {
    return this.state ;
  }

  inc_status():number{
    this.state += 1 ;
    return this.state
  }
}
