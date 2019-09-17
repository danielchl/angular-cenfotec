import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private readonly authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = this.generateHeaders(request);

    const authReq = this.addHeaders(request, headers);

    return next.handle(authReq).pipe(
      catchError(response => {
        return throwError(response);
      })
    );
  }

  private addHeaders(
    req: HttpRequest<any>,
    headers: HttpHeaders
  ): HttpRequest<any> {
    return req.clone({ headers });
  }

  private generateHeaders(req: HttpRequest<any>): HttpHeaders {

    const { password } = this.authService.getAuhtData();
    
    const headers = req.headers.set('authToken', password);

    console.log(headers);
    

    return headers;
  }
}
