import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NewService {
  constructor(private http: HttpClient) {}
  getNameObservable$: Observable<string> | null = null;

  getName(): Observable<string> {
    if(!this.getNameObservable$) {
    this.getNameObservable$ = this.http
      .get<{ userId: number; id: number; title: string; body: string; }>("http://jsonplaceholder.typicode.com/posts/1")
      .pipe(
        map((data: { userId: number; id: number; title: string; body: string; }): string => {
            return data.title;
        }),
        shareReplay()
      );
    }

    return this.getNameObservable$;
  }

}