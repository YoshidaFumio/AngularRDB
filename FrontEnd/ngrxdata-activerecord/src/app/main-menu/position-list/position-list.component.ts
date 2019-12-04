import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Position ,  PositionService  } from '../../models/position';

@Component({
  selector: 'app-Position-list',
  templateUrl: './Position-list.component.html',
  styleUrls: ['./Position-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PositionListComponent implements OnInit {
  position$: Observable <Position[]> ;

  constructor(
               private navroute : Router ,
               private positionService: PositionService,    
             ) {
               this.position$ = positionService.entities$ ;
              }

  ngOnInit() {
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }

  onNew() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionnewentry'],extra);
  }
  
  onSelect(id:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positiondetail',id],extra);
  }
}