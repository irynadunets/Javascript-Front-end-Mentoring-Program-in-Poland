import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        return next.handle(
          req.clone({
            url: `${environment.YOUTUBE_URL}/${req.url}`,
            setParams: {
              key: environment.YOUTUBE_KEY,
            }
          })
          );
    }
}
