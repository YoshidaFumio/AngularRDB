import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Branch ,  BranchService  } from '../../../models/branch';

@Component({
  selector: 'app-branch-select',
  templateUrl: './branch-select.component.html',
  styleUrls: ['./branch-select.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BranchSelectComponent implements OnInit {
  branch$: Observable <Branch[]> ;
  selected: number = 1;

  constructor(
        private navroute : Router ,
        private branchService: BranchService,    
      ) {
        this.branch$ = branchService.entities$ ;
      }

  ngOnInit() {
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }

  onGo(branch_id:number) {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeelist',branch_id],extra);
  }
}