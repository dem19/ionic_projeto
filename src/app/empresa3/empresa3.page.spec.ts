import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa3Page } from './empresa3.page';

describe('Empresa3Page', () => {
  let component: Empresa3Page;
  let fixture: ComponentFixture<Empresa3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empresa3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empresa3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
