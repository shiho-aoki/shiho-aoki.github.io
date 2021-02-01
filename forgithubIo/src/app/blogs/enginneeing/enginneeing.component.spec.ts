import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginneeingComponent } from './enginneeing.component';

describe('EnginneeingComponent', () => {
  let component: EnginneeingComponent;
  let fixture: ComponentFixture<EnginneeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginneeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginneeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
