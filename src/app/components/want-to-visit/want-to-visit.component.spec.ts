import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToVisitComponent } from './want-to-visit.component';

describe('WantToVisitComponent', () => {
  let component: WantToVisitComponent;
  let fixture: ComponentFixture<WantToVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
