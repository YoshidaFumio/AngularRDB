import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Employee ,  EmployeeService  } from '../../../models/employee';
import { Branch , BranchService} from '../../../models/branch' ;
import { Position , PositionService} from '../../../models/position' ;
import { Organization , OrganizationService} from '../../../models/organization' ;
import { Calculation ,  CalculationService  } from '../../../models/calculation';
import { Organizationjoin ,OrganizationjoinService } from '../../../models/organizationjoin';

const QueryStr: string = `where("organizations.id = ?").joins(:employees).select('org_code,org_name,employees.*')` ;
const AverageQueryStr: string = `Employee.average(:english_test)` ;

@Component({
  selector: 'app-organization-join-list',
  templateUrl: './organization-join-list.component.html',
  styleUrls: ['./organization-join-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationJoinListComponent implements OnInit {
  employee$: Observable <Employee[]> ;
  branch$: Observable <Branch[]> ;
  position$: Observable<Position[]> ;
  organization$: Observable<Organization[]> ;
  calculation$: Observable <Calculation[]> ;
  organizationjoin$: Observable <Organizationjoin[]> ;

  curBranch : Branch ;
  branchTable :Branch[] ;

  organization_id: number ;

  constructor(
        private route : ActivatedRoute ,
        private navroute : Router ,
        private employeeService: EmployeeService,    
        private branchService: BranchService,    
        private organizationService: OrganizationService,    
        private positionService: PositionService,    
        private calculationService: CalculationService, 
        private organizationjoinService :OrganizationjoinService
        ) {
        this.employee$ = employeeService.entities$ ;
        this.branch$ = branchService.entities$ ;
        this.organization$ = organizationService.entities$ ;
        this.organizationjoin$ = organizationjoinService.entities$ ;
        this.position$ = positionService.entities$ ;
        this.calculation$ = calculationService.entities$ ;
      }

  ngOnInit() {
    let regionNo : string ;
    let queryNew : string ;
    this.route.params.subscribe(res =>{
      this.organization_id = res['id']
      });
    regionNo = "\'" + this.organization_id + "\'"
    queryNew = QueryStr.replace("?",regionNo);
    this.organizationjoinService.clearCache() ;
    this.organizationjoinService.getWithQuery(queryNew) ;
    this.calculationService.getWithQuery(AverageQueryStr) ;

  }

  getCurrent(curorg:Branch[]) {
    this.branchTable = curorg ;
  }

  dspBranch(branch_id: number):string {
    this.curBranch = this.branchTable.find(
      (target)=> {
        return (target.id == branch_id) ;
      });
    return this.curBranch.branch_name
}

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationjoinselect'],extra);
  }

  
  onSelect(selectid:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationjoindetail',selectid],extra);
  }
}