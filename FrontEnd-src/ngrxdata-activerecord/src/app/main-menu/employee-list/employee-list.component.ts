import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Employee ,  EmployeeService  } from '../../models/employee';
import { Branch , BranchService} from '../../models/branch' ;
import { Position , PositionService} from '../../models/position' ;
import { Organization , OrganizationService} from '../../models/organization' ;
import { Calculation ,  CalculationService  } from '../../models/calculation';

const QueryStr: string = `where("branch_id = ?")` ;
const AverageQueryStr: string = `Employee.average(:english_test)` ;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {
  employee$: Observable <Employee[]> ;
  branch$: Observable <Branch[]> ;
  position$: Observable<Position[]> ;
  organization$: Observable<Organization[]> ;
  calculation$: Observable <Calculation[]> ;

  curOrganization : Organization ;
  organizationTable :Organization[] ;

  branch_id: number ;

  constructor(
        private route : ActivatedRoute ,
        private navroute : Router ,
        private employeeService: EmployeeService,    
        private branchService: BranchService,    
        private organizationService: OrganizationService,    
        private positionService: PositionService,    
        private calculationService: CalculationService, 
        ) {
        this.employee$ = employeeService.entities$ ;
        this.branch$ = branchService.entities$ ;
        this.organization$ = organizationService.entities$ ;
        this.position$ = positionService.entities$ ;
        this.calculation$ = calculationService.entities$ ;
      }

  ngOnInit() {
    let regionNo : string ;
    let queryNew : string ;
    this.route.params.subscribe(res =>{
      this.branch_id = res['id']
      });
    regionNo = "\'" + this.branch_id + "\'"
    queryNew = QueryStr.replace("?",regionNo);
    this.employeeService.clearCache() ;
    this.employeeService.getWithQuery(queryNew) ;
    this.calculationService.getWithQuery(AverageQueryStr) ;

  }

  getCurrent(curorg:Organization[]) {
    this.organizationTable = curorg ;
  }

  dspOrganization(organization_id: number):string {
    this.curOrganization = this.organizationTable.find(
      (target)=> {
        return (target.id == organization_id) ;
      });
    return this.curOrganization.org_name
}

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchselect'],extra);
  }

  onNew() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeenewentry',this.branch_id],extra);
  }
  
  onSelect(selectid:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeedetail',selectid],extra);
  }
}