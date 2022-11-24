import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherdummyComponent } from './anotherdummy.component';

describe('AnotherdummyComponent', () => {
  let component: AnotherdummyComponent;
  let fixture: ComponentFixture<AnotherdummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherdummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
