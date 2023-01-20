import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let token = req.clone({
    //   setHeaders: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // return next.handle(token);
    return next.handle(req);
  }
}
