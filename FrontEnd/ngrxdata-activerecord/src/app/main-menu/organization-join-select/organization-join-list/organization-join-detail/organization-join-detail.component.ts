import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Organizationjoin ,  OrganizationjoinService  } from '../../../../models/organizationjoin';
import { Branch ,  BranchService  } from '../../../../models/branch';
import { Organization ,  OrganizationService  } from '../../../../models/organization';
import { Position ,  PositionService  } from '../../../../models/position';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-organization-join-detail',
  templateUrl: './organization-join-detail.component.html',
  styleUrls: ['./organization-join-detail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrganizationJoinDetailComponent implements OnInit {
  organizationjoin$: Observable <Organizationjoin[]> ;
  branch$: Observable <Branch[]> ;
  organization$: Observable <Organization[]> ;
  position$: Observable <Position[]> ;
  id: number ;
  return_id: number ;
  curOrganizationjoin: Organizationjoin ;
  organizationjoinTable: Organizationjoin[] ;
  organizationTable: Organization[] ;
  positionTable: Position[] ;
  branchTable: Branch[] ;
  row: number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private organizationjoinService: OrganizationjoinService, 
    private branchService: BranchService, 
    private organizationService: OrganizationService, 
    private positionService: PositionService, 
    private fb: FormBuilder ,

    ) {
        this.organizationjoin$ = organizationjoinService.entities$ ;
        this.branch$ = branchService.entities$ ;
        this.position$ = positionService.entities$ ;
        this.organization$ = organizationService.entities$ ;
  }

  ngOnInit() {
    this.route.params.subscribe(res =>{
      this.id = res['id']
    });
  }

  getCurrent(curorg:Organizationjoin[]) {
    this.organizationjoinTable = curorg ;
    this.curOrganizationjoin = this.organizationjoinTable.find (
             (target) =>{ 
                 return (target.joinid == this.id) ;
             });
    this.row = this.organizationjoinTable.findIndex(
              (target)=> {
                return (target.joinid == this.id) ;
              });
    this.return_id = this.curOrganizationjoin.organization_id ;
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

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/organizationjoinlist',this.return_id],extra);
  }


}

