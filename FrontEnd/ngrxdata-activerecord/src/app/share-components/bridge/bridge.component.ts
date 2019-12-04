import { Component, OnInit , Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {
  @Input() inputdata : any ;
  @Output() outputEvent = new EventEmitter() ;

  constructor() { }

  ngOnInit() :any{
    this.outputEvent.emit(this.inputdata) ;
  }

}
