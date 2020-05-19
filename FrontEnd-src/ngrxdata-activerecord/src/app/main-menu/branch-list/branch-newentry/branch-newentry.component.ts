import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Branch ,  BranchService  } from '../../../models/branch';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogComponent } from '../../../share-components/dialog/dialog.component';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-branch-newentry',
  templateUrl: './branch-newentry.component.html',
  styleUrls: ['./branch-newentry.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BranchNewentryComponent implements OnInit {
  branch$: Observable <Branch[]> ;
  id: number ;
  curBranch : Branch ;
  branchTable : Branch[] ;
  row: number ;
  branchForm:FormGroup ;
  alertDialogResult = '';
  errMessage = [] ;
  errCount :number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private branchService: BranchService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog  ,
    private dialogService : DialogService
    ) {
        this.branch$ = branchService.entities$ ;
  }

  ngOnInit() {
    this.createForm() ;

  }

  getCurrent(curorg:Branch[]) {
    this.branchTable = curorg ;
    this.curBranch = this.branchTable.find (
             (target) =>{ 
                 return (target.id == this.id) ;
             });
    this.row = this.branchTable.findIndex(
              (target)=> {
                return (target.id == this.id) ;
              });
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchlist'],extra);
  }


  onCreate() {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if (this.branchForm.value['code']==='') {
      this.errMessage[this.errCount]="101."+"コードが入力されていません"
      this.errCount ++ ;
    }
    else {
      let codeu = this.branchForm.value['code']
      let mret = this.branchTable.findIndex(
        (target) =>{
          return (target.branch_code === codeu)
        }
      )
      if (mret != -1){
        this.errMessage[this.errCount]="102."+"コードが重複してます"
        this.errCount ++ ;  
      }
    }
    if (this.branchForm.value['name']==='') {
      this.errMessage[this.errCount]="111."+"名前が入力されていません"
      this.errCount ++ ;
    }
    if (this.branchForm.value['phone']==='') {
      this.errMessage[this.errCount]="121."+"電話番号が入力されていません"
      this.errCount ++ ;
    }
    if (this.errCount > 0){
      this.dialogService.errorDisplay("入力エラー",this.errMessage)
      return
    }

    let orgdata = new Branch ;

    orgdata.branch_code = this.branchForm.value['code'] ;
    orgdata.branch_name = this.branchForm.value['name'] ;
    orgdata.zip_code = this.branchForm.value['zip'] ;
    orgdata.prefecture = this.branchForm.value['prefecture'] ;
    orgdata.city = this.branchForm.value['city'] ;
    orgdata.street = this.branchForm.value['street'] ;
    orgdata.building = this.branchForm.value['building'] ;
    orgdata.main_phone = this.branchForm.value['phone'] ;
    orgdata.main_fax = this.branchForm.value['fax'] ;
    orgdata.lock_version = 0 ;
    this.branchService.add(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchlist'],extra);
  }

  createForm() {
    this.branchForm = this.fb.group ({
      code: ['',[Validators.required]],
      name: ['',[Validators.required]],
      zip:[''],
      prefecture: [''],
      city: [''],
      street: [''],
      building: [''],
      phone: [''],
      fax: ['']
    });
  }

}
