import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa1Page } from './empresa1.page';

describe('Empresa1Page', () => {
  let component: Empresa1Page;
  let fixture: ComponentFixture<Empresa1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empresa1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empresa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
