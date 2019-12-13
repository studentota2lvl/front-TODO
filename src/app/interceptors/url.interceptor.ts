import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlInterceptor implements HttpInterceptor {
  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updateOptions = {
      url: `${environment.restServerURL}/${request.url}`,
    };

    return next.handle(request.clone(updateOptions));
  }
}
