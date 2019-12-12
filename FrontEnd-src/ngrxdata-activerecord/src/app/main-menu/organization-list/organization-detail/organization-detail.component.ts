import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organization ,  OrganizationService  } from '../../../models/organization';
import { FormGroup, FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material' ;
import { DialogComponent } from '../../../share-components/dialog/dialog.component';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';


@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationDetailComponent implements OnInit {
  organization$: Observable <Organization[]> ;
  id: number ;
  curOrganization : Organization ;
  organizationTable : Organization[] ;
  row: number ;
  organizationForm:FormGroup ;
  alertDialogResult = '';
  errMessage = [] ;
  errCount :number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private organizationService: OrganizationService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog  
    ) {
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
    this.route.params.subscribe(res =>{
      this.id = res['id']
    });

  }

  getCurrent(curorg:Organization[]) {
    this.organizationTable = curorg ;
    this.curOrganization = this.organizationTable.find (
             (target) =>{ 
                 return (target.id == this.id) ;
             });
    this.row = this.organizationTable.findIndex(
              (target)=> {
                return (target.id == this.id) ;
              });
    this.createForm() ;
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
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
        this.organizationService.delete(this.curOrganization.id) ;
        let extra:NavigationExtras = { }
        this.navroute.navigate(['/organizationlist'],extra);           
      }      
    });
  }

  onSave() {
    /* if (!this.checkForm()){ return } */
    let orgdata = new Organization ;
    orgdata.id = this.curOrganization.id ;
    orgdata.org_code = this.organizationForm.value['code'] ;
    orgdata.org_name = this.organizationForm.value['name'] ;
    orgdata.lock_version = this.curOrganization.lock_version ;
    this.organizationService.update(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
  }

  createForm() {
    this.organizationForm = this.fb.group ({
      code: [this.curOrganization.org_code,Validators.required] ,
      name: [this.curOrganization.org_name,Validators.required]
    });
  }

  checkForm():boolean {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if  (this.organizationForm.value['code']='' ){
      this.errMessage[this.errCount] = (this.errCount+1) +".コードが入力されていません。";
      this.errCount += 1 ;
    }
    if  (this.organizationForm.value['name']='' ){
      this.errMessage[this.errCount] = (this.errCount+1) +".名前が入力されていません。";
      this.errCount += 1 ;
    }
    // エラーダイアログの表示
    if (this.errCount > 0) {
      let dialog2 = this.matdialog.open(DialogComponent, {
        'data' : {'title': 'エラー' , 'message' : this.errMessage},
　　　　/*        'height' : '240px',*/
        'width' : '280px',
        'disableClose' : false
      });
      dialog2.afterClosed().subscribe( result => {
        console.log("error occur")
        return　false ;
      })
    }
    else{
      return true ;
    }

  }

}
