import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organization ,  OrganizationService  } from '../../models/organization';

@Component({
  selector: 'app-organization-join-select',
  templateUrl: './organization-join-select.component.html',
  styleUrls: ['./organization-join-select.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationJoinSelectComponent implements OnInit {
  organization$: Observable <Organization[]> ;

  constructor(
    private navroute : Router ,
    private organizationService: OrganizationService,    
    ) {
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }
  
  onSelect(id:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationjoinlist',id],extra);
    
  }

}
