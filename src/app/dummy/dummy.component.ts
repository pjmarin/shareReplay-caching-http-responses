import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NewService } from '../services/new.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  nombreObservable$: Observable<string> | null = null;
  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newService.getName().subscribe(() => console.log('Config Subscription - dummy'));
    this.nombreObservable$ = this.newService.getNameObservable$;
  }

}
