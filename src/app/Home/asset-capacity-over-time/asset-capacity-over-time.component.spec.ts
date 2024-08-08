import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCapacityOverTimeComponent } from './asset-capacity-over-time.component';

describe('AssetCapacityOverTimeComponent', () => {
  let component: AssetCapacityOverTimeComponent;
  let fixture: ComponentFixture<AssetCapacityOverTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetCapacityOverTimeComponent]
    });
    fixture = TestBed.createComponent(AssetCapacityOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
