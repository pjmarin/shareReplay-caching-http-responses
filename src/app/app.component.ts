import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'funOfheuristic-ngrx-tutorial';
  nombreObservable$: Observable<string> | null = null;

  constructor(private newService: NewService) {}

  ngOnInit() {
    this.newService.getName().subscribe(() => console.log('Config Subscription - appcomponent'));
    this.nombreObservable$ = this.newService.getNameObservable$;
  }

  getname() {
    this.nombreObservable$ = this.newService.getName();
  }
}
