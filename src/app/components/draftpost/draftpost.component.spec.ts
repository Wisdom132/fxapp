import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftpostComponent } from './draftpost.component';

describe('DraftpostComponent', () => {
  let component: DraftpostComponent;
  let fixture: ComponentFixture<DraftpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
