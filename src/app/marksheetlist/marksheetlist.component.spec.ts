import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetlistComponent } from './marksheetlist.component';

describe('MarksheetlistComponent', () => {
  let component: MarksheetlistComponent;
  let fixture: ComponentFixture<MarksheetlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksheetlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksheetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
