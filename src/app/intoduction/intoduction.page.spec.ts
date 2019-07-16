import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoductionPage } from './intoduction.page';

describe('IntoductionPage', () => {
  let component: IntoductionPage;
  let fixture: ComponentFixture<IntoductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoductionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
