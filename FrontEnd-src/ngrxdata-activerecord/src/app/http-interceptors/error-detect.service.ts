import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest , HttpErrorResponse, HttpResponse
} from '@angular/common/http';

import { Observable , throwError } from 'rxjs';
import { tap , finalize } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class ErrorDetect implements HttpInterceptor {
  errmsg:string[]=[] ;

  constructor ( private dialogService : DialogService ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {;
      let stat : string ;

    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => stat = event instanceof HttpResponse ? "succeeded" : "",
        // Operation failed; error is an HttpErrorResponse
        error => stat = "failed"
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        if (stat === "failed"){
          switch(req.method){
            case "GET":
              this.errmsg[0] = "081.データが読み込めません。" ;
              break ;
            case "PUT":
              this.errmsg[0] = "082.データが更新できません。" ;
              break ;
            case "POST":
              this.errmsg[0] = "083.データが作成できません。" ;
              break ;
            case "DELETE":
              this.errmsg[0] = "084.データが削除できません。" ;
              break ;
            default:
              this.errmsg[0] = "089.Methodが認識できません。" ;
          }
          this.errmsg[1] = "詳細はログを確認してください。";
          this.dialogService.errorDisplay("HTTPエラー",this.errmsg)
        }
      })
    );
  }
}
