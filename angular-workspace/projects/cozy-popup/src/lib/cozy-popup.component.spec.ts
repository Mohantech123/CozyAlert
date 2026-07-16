import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozyPopupComponent } from './cozy-popup.component';

describe('CozyPopupComponent', () => {
  let component: CozyPopupComponent;
  let fixture: ComponentFixture<CozyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CozyPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CozyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
