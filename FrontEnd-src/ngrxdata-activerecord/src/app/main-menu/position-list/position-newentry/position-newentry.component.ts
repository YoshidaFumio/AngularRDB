import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Position ,  PositionService  } from '../../../models/position';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog' ;
import { DialogService } from '../../../services/dialog.service';

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
  errMessage: string[];
  errCount:number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private positionService: PositionService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog ,
    private dialogService: DialogService 
    ) {
        this.position$ = positionService.entities$ ;
  }

  ngOnInit() {
    this.createForm() ;
  }
  getCurrent(curorg:Position[]) {
    this.positionTable = curorg ;
    this.curPosition = this.positionTable.find (
             (target) =>{ 
                 return (target.id === this.id) ;
             });
    this.setupForm() ;
  }

  onClose(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);
  }

  onCreate() {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if (this.positionForm.value['code']=='') {
      this.errMessage[this.errCount]="301."+"コードが入力されていません"
      this.errCount ++ ;
    }
    else {
      let codeu = this.positionForm.value['code']
      let mret = this.positionTable.findIndex(
        (target) =>{
          return (target.pos_code === codeu)
        }
      )
      if (mret != -1){
        this.errMessage[this.errCount]="302."+"コードが重複してます"
        this.errCount ++ ;  
      }
    }
    if (this.positionForm.value['name']=='') {
      this.errMessage[this.errCount]="311."+"名前が入力されていません"
      this.errCount ++ ;
    }
    if (this.errCount > 0){
      this.dialogService.errorDisplay("入力エラー",this.errMessage)
      return
    }

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
      code: ['',[Validators.required]],
      name: ['',[Validators.required]] 
    });
  }

  setupForm() {
    this.positionForm.setValue({
      code: '' ,
      name: ''
    });
  }



}
