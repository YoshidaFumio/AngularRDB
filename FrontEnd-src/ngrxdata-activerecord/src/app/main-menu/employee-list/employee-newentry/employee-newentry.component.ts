import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Employee ,  EmployeeService  } from '../../../models/employee';
import { Branch ,  BranchService  } from '../../../models/branch';
import { Organization ,  OrganizationService  } from '../../../models/organization';
import { Position ,  PositionService  } from '../../../models/position';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { DialogService } from '../../../services/dialog.service';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';

@Component({
  selector: 'app-employee-newentry',
  templateUrl: './employee-newentry.component.html',
  styleUrls: ['./employee-newentry.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeNewentryComponent implements OnInit {
  employee$: Observable <Employee[]> ;
  branch$: Observable <Branch[]> ;
  organization$: Observable <Organization[]> ;
  position$: Observable <Position[]> ;
  id: number ;
  return_id: number ;
  employeeTable : Employee[] ;
  row: number ;
  employeeForm:FormGroup ;
  alertDialogResult = '';
  errMessage = [] ;
  errCount :number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private employeeService: EmployeeService, 
    private branchService: BranchService, 
    private organizationService: OrganizationService, 
    private positionService: PositionService, 
    private fb: FormBuilder ,
    private dialogService : DialogService  
    ) {
        this.employee$ = employeeService.entities$ ;
        this.branch$ = branchService.entities$ ;
        this.position$ = positionService.entities$ ;
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
    this.route.params.subscribe(res =>{
      this.return_id = res['id'] ;
      this.createForm();
    });
  }


  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeelist',this.return_id],extra);
  }


  onCreate() {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if (this.employeeForm.value['first_name']==='') {
      this.errMessage[this.errCount]="411."+"名前が入力されていません"
      this.errCount ++ ;
    }

    if (this.employeeForm.value['last_name']==='') {
      this.errMessage[this.errCount]="421."+"姓が入力されていません"
      this.errCount ++ ;
    }
    if (this.employeeForm.value['mail_address']==='') {
      this.errMessage[this.errCount]="431."+"eメールが入力されていません"
      this.errCount ++ ;
    }
    /*
    if (this.employeeForm.value['branch_id']=== -1) {
      this.errMessage[this.errCount]="441."+"事業所が入力されていません"
      this.errCount ++ ;
    }
    */
    if (this.employeeForm.value['organization_id']=== -1) {
      this.errMessage[this.errCount]="451."+"組織が入力されていません"
      this.errCount ++ ;
    }
    if (this.employeeForm.value['position_id']=== -1) {
      this.errMessage[this.errCount]="461."+"役職が入力されていません"
      this.errCount ++ ;
    }
    if (this.errCount > 0){
      this.dialogService.errorDisplay("入力エラー",this.errMessage)
      return
    }

    let empdata = new Employee ;
    empdata.first_name = this.employeeForm.value['first_name'] ;
    empdata.last_name = this.employeeForm.value['last_name'] ;
    empdata.mobile_number = this.employeeForm.value['mobile_number'] ;
    empdata.mail_address = this.employeeForm.value['mail_address'] ;
    empdata.twitter_link = this.employeeForm.value['twitter_link'] ;
    empdata.birthday = this.employeeForm.value['birthday'] ;
    empdata.entering_company = this.employeeForm.value['entering_company'] ;
    empdata.english_test = this.employeeForm.value['english_test'] ;
    empdata.branch_id = this.return_id ;
    empdata.position_id = this.employeeForm.value['position_id'] ;
    empdata.organization_id = this.employeeForm.value['organization_id'] ;
    empdata.lock_version = 0 ;
    this.employeeService.add(empdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeelist',this.return_id],extra);
  }

  createForm() {
    this.employeeForm = this.fb.group ({
      first_name: ['',[Validators.required]],
      last_name: ['',[Validators.required]],
      mobile_number: [''],
      mail_address: [''],
      twitter_link: [''],
      birthday: [''],
      entering_company: [''],
      english_test: [''],
      // branch_id: [this.return_id],
      organization_id: [-1],
      position_id: [-1],
    });
  }

}
