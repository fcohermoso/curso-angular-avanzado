import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoItemComponent } from './nuevo-item.component';

describe('NuevoItemComponent', () => {
  let component: NuevoItemComponent;
  let fixture: ComponentFixture<NuevoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
