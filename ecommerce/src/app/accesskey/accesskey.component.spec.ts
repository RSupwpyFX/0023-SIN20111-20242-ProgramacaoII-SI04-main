import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesskeyComponent } from './accesskey.component';

describe('AccesskeyComponent', () => {
  let component: AccesskeyComponent;
  let fixture: ComponentFixture<AccesskeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesskeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesskeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
