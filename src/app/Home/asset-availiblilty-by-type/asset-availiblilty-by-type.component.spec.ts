/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssetAvailibliltyByTypeComponent } from './asset-availiblilty-by-type.component';

describe('AssetAvailibliltyByTypeComponent', () => {
  let component: AssetAvailibliltyByTypeComponent;
  let fixture: ComponentFixture<AssetAvailibliltyByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAvailibliltyByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAvailibliltyByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
