import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organization ,  OrganizationService  } from '../../../models/organization';
import { FormGroup, FormControl, FormBuilder , ValidationErrors , Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-organization-newentry',
  templateUrl: './organization-newentry.component.html',
  styleUrls: ['./organization-newentry.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationNewentryComponent implements OnInit {
  organization$: Observable <Organization[]> ;
  id: number ;
  curOrganization : Organization ;
  organizationTable : Organization[] ;
  organizationForm:FormGroup ;
  alertDialogResult = '';
  errMessage: string[];
  errCount:number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private organizationService: OrganizationService, 
    private fb: FormBuilder ,
    private dialogService: DialogService
    ) {
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
    
    this.createForm() ;
  }

  getCurrent(curorg:Organization[]) {
    this.organizationTable = curorg ;
    this.curOrganization = this.organizationTable.find (
             (target) =>{ 
                 return (target.id === this.id) ;
             });
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
  }

  onCreate() {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if (this.organizationForm.value['code']==='') {
      this.errMessage[this.errCount]="201."+"コードが入力されていません"
      this.errCount ++ ;
    }
    else {
      let codeu = this.organizationForm.value['code']
      let mret = this.organizationTable.findIndex(
        (target) =>{
          return (target.org_code === codeu)
        }
      )
      if (mret != -1){
        this.errMessage[this.errCount]="202."+"コードが重複してます"
        this.errCount ++ ;  
      }
    }
    if (this.organizationForm.value['name']==='') {
      this.errMessage[this.errCount]="211."+"名前が入力されていません"
      this.errCount ++ ;
    }
    if (this.errCount > 0){
      this.dialogService.errorDisplay("入力エラー",this.errMessage)
      return
    }
    let orgdata = new Organization ;
    orgdata.org_code = this.organizationForm.value['code'] ;
    orgdata.org_name = this.organizationForm.value['name'] ;
    orgdata.lock_version = 0 ;
    this.organizationService.add(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
  }

  createForm() {
    this.organizationForm = this.fb.group ({
      code: ['',[Validators.required]],
      name: ['',[Validators.required]] 
    });

     //matcher = new MyErrorStateMatcher();
  }

}

