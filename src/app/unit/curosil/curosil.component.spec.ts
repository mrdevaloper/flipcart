import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurosilComponent } from './curosil.component';

describe('CurosilComponent', () => {
  let component: CurosilComponent;
  let fixture: ComponentFixture<CurosilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurosilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurosilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
