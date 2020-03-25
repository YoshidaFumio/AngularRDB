import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organization ,  OrganizationService  } from '../../../models/organization';
import { FormGroup, FormControl, FormBuilder , ValidationErrors , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';

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
    
    this.createForm() ;
  }

  getCurrent(curorg:Organization[]) {
    this.organizationTable = curorg ;
    this.curOrganization = this.organizationTable.find (
             (target) =>{ 
                 return (target.id === this.id) ;
             });
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationlist'],extra);
  }

  onSave() {
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
      code: ['',Validators.required] ,
      name: ['',Validators.required] 
    });
  }

}

