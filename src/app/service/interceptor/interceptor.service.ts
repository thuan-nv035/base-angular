import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add authorization header if the user is authenticated
    if (this.authService.isAuthenticated()) {
      const authToken = this.authService.getAuthToken();
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle unauthorized response
        if (error.status === 401) {
          this.authService.refreshToken();
          // You can also redirect to the login page or display a message
        }

        return throwError(error);
      })
    );
  }
}
