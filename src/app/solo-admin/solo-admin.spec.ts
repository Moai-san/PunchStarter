import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloAdminComponent } from './solo-admin';

describe('SoloAdminComponent', () => {
  let component: SoloAdminComponent;
  let fixture: ComponentFixture<SoloAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
