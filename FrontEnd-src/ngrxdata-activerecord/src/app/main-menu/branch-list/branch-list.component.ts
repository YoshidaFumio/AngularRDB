import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Branch ,  BranchService  } from '../../models/branch';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BranchListComponent implements OnInit {
  branch$: Observable <Branch[]> ;

  constructor(
        private navroute : Router ,
        private branchService: BranchService,    
      ) {
        this.branch$ = branchService.entities$ ;
      }

  ngOnInit() {
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }

  onNew() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchnewentry'],extra);
  }
  
  onSelect(id:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchdetail',id],extra);
  }
}