import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Employee ,  EmployeeService  } from '../../../models/employee';
import { Branch ,  BranchService  } from '../../../models/branch';
import { Organization ,  OrganizationService  } from '../../../models/organization';
import { Position ,  PositionService  } from '../../../models/position';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogService } from '../../../services/dialog.service';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent implements OnInit {
  employee$: Observable <Employee[]> ;
  branch$: Observable <Branch[]> ;
  organization$: Observable <Organization[]> ;
  position$: Observable <Position[]> ;
  id: number ;
  return_id: number ;
  curEmployee: Employee ;
  employeeTable: Employee[] ;
  organizationTable: Organization[] ;
  positionTable: Position[] ;
  branchTable: Branch[] ;
  row: number ;
  employeeForm:FormGroup ;
  alertDialogResult = '';
  errMessage = [] ;
  errCount :number ;
  myPosition_id : number

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private employeeService: EmployeeService, 
    private branchService: BranchService, 
    private organizationService: OrganizationService, 
    private positionService: PositionService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog ,
    private dialogService : DialogService  
    ) {
        this.employee$ = employeeService.entities$ ;
        this.branch$ = branchService.entities$ ;
        this.position$ = positionService.entities$ ;
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
    this.route.params.subscribe(res =>{
      this.id = res['id']
    });
  }

  getCurrent(curorg:Employee[]) {
    this.employeeTable = curorg ;
    this.curEmployee = this.employeeTable.find (
             (target) =>{ 
                 return (target.id == this.id) ;
             });
    this.row = this.employeeTable.findIndex(
              (target)=> {
                return (target.id == this.id) ;
              });
    this.return_id = this.curEmployee.branch_id ;
    this.myPosition_id = this.curEmployee.position_id ;
    this.createForm() ;
  }

  getBranch(brap:Branch[]){
    this.branchTable = brap ;
  }

  dspBranch(branch_id:number):string {
    let branchItem: Branch ;
    branchItem = this.branchTable.find(
               (target) => {
                 return (target.id == branch_id)
               });
    return branchItem.branch_name ;
    }

  getOrganization(orgp:Organization[]){
    this.organizationTable= orgp ;
  }
  dspOrganization(organization_id):string {
    let organizationItem: Organization ;
    organizationItem = this.organizationTable.find(
               (target) => {
                 return (target.id == organization_id)
               });
    return organizationItem.org_name ;
  }

  getPosition(posp:Position[]){
    this.positionTable= posp ;
  }

  dspPosition(position_id:number):string {
    let positionItem: Position ;
    positionItem = this.positionTable.find(
               (target) => {
                 return (target.id == position_id)
               });
    return positionItem.pos_name ;
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeelist',this.return_id],extra);
  }

  onDelete(){
    let dialog = this.matdialog.open(DialogOkNgComponent, {
      'data' : {'title': '削除確認' , 'message' : '削除してもよいですか？'},
      'height' : '200px',
      'width' : '280px',
      'disableClose' : true
  　});

    // ボタンの結果を取得
    dialog.afterClosed().subscribe( (result:any) => {
          // 結果をセット
      this.alertDialogResult = result;
      if (this.alertDialogResult=='OK') {
        this.employeeService.delete(this.curEmployee.id) ;
        let extra:NavigationExtras = { }
        this.navroute.navigate(['/employeelist',this.return_id],extra);           
      }      
    });
  }

  onUpdate() {
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
    if (this.errCount > 0){
      this.dialogService.errorDisplay("入力エラー",this.errMessage)
      return
    }

    let empdata = new Employee ;
    empdata.id = this.curEmployee.id ;
    empdata.first_name = this.employeeForm.value['first_name'] ;
    empdata.last_name = this.employeeForm.value['last_name'] ;
    empdata.mobile_number = this.employeeForm.value['mobile_number'] ;
    empdata.mail_address = this.employeeForm.value['mail_address'] ;
    empdata.twitter_link = this.employeeForm.value['twitter_link'] ;
    empdata.birthday = this.employeeForm.value['birthday'] ;
    empdata.entering_company = this.employeeForm.value['entering_company'] ;
    empdata.english_test = this.employeeForm.value['english_test'] ;
    empdata.branch_id = this.employeeForm.value['branch_id'] ;
    empdata.position_id = this.employeeForm.value['position_id'] ; 
   /* empdata.position_id = this.myPosition_id ; */
    empdata.organization_id = this.employeeForm.value['organization_id'] ;
    empdata.lock_version = this.curEmployee.lock_version ;
    this.employeeService.update(empdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/employeelist',this.return_id],extra);
  }

  createForm() {
    this.employeeForm = this.fb.group ({
      first_name: [this.curEmployee.first_name,[Validators.required]],
      last_name: [this.curEmployee.last_name,[Validators.required]],
      mobile_number: [this.curEmployee.mobile_number],
      mail_address: [this.curEmployee.mail_address],
      twitter_link: [this.curEmployee.twitter_link],
      birthday: [this.curEmployee.birthday],
      entering_company: [this.curEmployee.entering_company],
      english_test: [this.curEmployee.english_test],
      branch_id: [this.curEmployee.branch_id],
      organization_id: [this.curEmployee.organization_id],
      position_id: [this.curEmployee.position_id]
    });
  }

}

