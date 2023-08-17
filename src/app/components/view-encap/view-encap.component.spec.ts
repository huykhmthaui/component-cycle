import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapComponent } from './view-encap.component';

describe('ViewEncapComponent', () => {
  let component: ViewEncapComponent;
  let fixture: ComponentFixture<ViewEncapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEncapComponent]
    });
    fixture = TestBed.createComponent(ViewEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
