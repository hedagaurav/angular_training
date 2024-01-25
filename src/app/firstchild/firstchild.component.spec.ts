import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstchildComponent } from './firstchild.component';

describe('FirstchildComponent', () => {
  let component: FirstchildComponent;
  let fixture: ComponentFixture<FirstchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
