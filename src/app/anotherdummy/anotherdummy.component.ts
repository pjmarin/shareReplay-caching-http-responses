import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewService } from '../services/new.service';

@Component({
  selector: 'app-anotherdummy',
  templateUrl: './anotherdummy.component.html',
  styleUrls: ['./anotherdummy.component.css']
})
export class AnotherdummyComponent implements OnInit {
  nombreObservable$: Observable<string> | null = null;
  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newService.getName().subscribe(() => console.log('Config Subscription - anotherdummy'));
    this.nombreObservable$ = this.newService.getNameObservable$;
  }

}
