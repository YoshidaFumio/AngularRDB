import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organization ,  OrganizationService  } from '../../models/organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationListComponent implements OnInit {
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

  onNew() {
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationnewentry'],extra);
  }
  
  onSelect(id:number):void{
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationdetail',id],extra);
    
  }

}
