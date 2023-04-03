import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  private requestCount = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      !request.headers.has('ContentType') &&
      request.body instanceof FormData
    ) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    this.requestCount++;

    if (this.loaderService.getloadingIndicator !== undefined) {
      this.loaderService.startLoading();
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (--this.requestCount <= 0) {
          this.requestCount = 0;
          this.loaderService.hideLoading();
        }
      })
    );
  }
}
