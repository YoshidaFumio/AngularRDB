import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Employee ,  EmployeeService  } from '../models/employee';
import { Branch ,  BranchService  } from '../models/branch';
import { Organization ,  OrganizationService  } from '../models/organization';
import { Position ,  PositionService  } from '../models/position';
import { EntityAction } from '@ngrx/data';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../initstate/counter.actions';
import { InitializeService } from '../services/initialize.service' ;


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {
  employee$: Observable <Employee[]> ;  //Local pointer for Model
  branch$: Observable <Branch[]> ;
  position$: Observable <Position[]> ;
  organization$: Observable <Organization[]> ;
  selected: number = 1 ;

  // set every entity service and entity pointer to Store
  constructor( 
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private employeeService: EmployeeService ,
    private branchService: BranchService ,
    private positionService: PositionService ,
    private organizationService: OrganizationService,
    private initializeService : InitializeService,
    ) 
    {
      this.employee$ = employeeService.entities$ ; 
      this.branch$ = branchService.entities$ ;
      this.position$ = positionService.entities$ ;
      this.organization$ = organizationService.entities$ ;
  
  }

  ngOnInit() {
    //check first time or not ,if first time read all Table execpt Employee
    if ( this.initializeService.get_status() == 0 ) { 
      this.initializeService.inc_status(); 
      this.branchService.getAll() ; 
      this.organizationService.getAll() ;
      this.positionService.getAll() ;
    } 
  }
  //
  onBranch(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchlist'],extra);
  }
  onOrganization(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
  }
  onPosition() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);    
  }
  onEmployee() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchselect'],extra);    
  }
  onOrganizationJoin() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationjoinselect'],extra);    
  }

  onTransactionTest() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/transactiontest'],extra);    
  }

}
