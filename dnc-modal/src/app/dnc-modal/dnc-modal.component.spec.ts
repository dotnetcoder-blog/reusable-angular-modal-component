import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DncModalComponent } from './dnc-modal.component';

describe('DncModalComponent', () => {
  let component: DncModalComponent;
  let fixture: ComponentFixture<DncModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DncModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DncModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
