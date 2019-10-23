import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa2Page } from './empresa2.page';

describe('Empresa2Page', () => {
  let component: Empresa2Page;
  let fixture: ComponentFixture<Empresa2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empresa2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empresa2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
