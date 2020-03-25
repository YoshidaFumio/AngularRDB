import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Position ,  PositionService  } from '../../../models/position';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';

@Component({
  selector: 'app-position-newentry',
  templateUrl: './position-newentry.component.html',
  styleUrls: ['./position-newentry.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PositionNewentryComponent implements OnInit {
  position$: Observable <Position[]> ;
  id: number ;
  curPosition : Position ;
  positionTable : Position[] ;
  positionForm:FormGroup ;
  alertDialogResult = '';

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private positionService: PositionService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog  
    ) {
        this.position$ = positionService.entities$ ;
        this.createForm() ;
  }

  ngOnInit() {
  }
  getCurrent(curorg:Position[]) {
    this.positionTable = curorg ;
    this.curPosition = this.positionTable.find (
             (target) =>{ 
                 return (target.id === this.id) ;
             });
    this.setupForm() ;
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);
  }

  onSave() {
    let orgdata = new Position ;
    orgdata.pos_code = this.positionForm.value['code'] ;
    orgdata.pos_name = this.positionForm.value['name'] ;
    orgdata.lock_version = 0 ;
    this.positionService.add(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);
  }

  createForm() {
    this.positionForm = this.fb.group ({
      code: '' ,
      name: '' 
    });
  }

  setupForm() {
    this.positionForm.setValue({
      code: '' ,
      name: ''
    });
  }



}
