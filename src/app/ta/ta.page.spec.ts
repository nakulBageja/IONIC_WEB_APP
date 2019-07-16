import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAPage } from './ta.page';

describe('TAPage', () => {
  let component: TAPage;
  let fixture: ComponentFixture<TAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
