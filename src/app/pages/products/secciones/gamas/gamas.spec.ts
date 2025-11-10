import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamas } from './gamas';

describe('Gamas', () => {
  let component: Gamas;
  let fixture: ComponentFixture<Gamas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gamas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
