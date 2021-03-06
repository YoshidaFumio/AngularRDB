import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Branch ,  BranchService  } from '../../../models/branch';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogService } from '../../../services/dialog.service';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BranchDetailComponent implements OnInit {
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
    this.route.params.subscribe(res =>{
      this.id = res['id']
    });

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

    this.createForm() ;
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchlist'],extra);
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
        this.branchService.delete(this.curBranch.id) ;
        let extra:NavigationExtras = { }
        this.navroute.navigate(['/branchlist'],extra);           
      }      
    });
  }

  onUpdate() {
    /* Check Data*/
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
      if ( mret != this.row) {
        if (mret != -1){
          this.errMessage[this.errCount]="102."+"コードが重複してます"
          this.errCount ++ ;  
        }
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
    orgdata.id = this.curBranch.id ;
    orgdata.branch_code = this.branchForm.value['code'] ;
    orgdata.branch_name = this.branchForm.value['name'] ;
    orgdata.zip_code = this.branchForm.value['zip'] ;
    orgdata.prefecture = this.branchForm.value['prefecture'] ;
    orgdata.city = this.branchForm.value['city'] ;
    orgdata.street = this.branchForm.value['street'] ;
    orgdata.building = this.branchForm.value['building'] ;
    orgdata.main_phone = this.branchForm.value['phone'] ;
    orgdata.main_fax = this.branchForm.value['fax'] ;
    orgdata.lock_version = this.curBranch.lock_version ;
    this.branchService.update(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/branchlist'],extra);
  }

  createForm() {
    this.branchForm = this.fb.group ({
      code: [this.curBranch.branch_code,[Validators.required]],
      name: [this.curBranch.branch_name,[Validators.required]],
      zip: [this.curBranch.zip_code],
      prefecture: [this.curBranch.prefecture],
      city: [this.curBranch.city],
      street: [this.curBranch.street],
      building: [this.curBranch.building],
      phone: [this.curBranch.main_phone],
      fax: [this.curBranch.main_fax]
    });
  }

}

