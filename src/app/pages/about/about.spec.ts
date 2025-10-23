import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges()
=======
    fixture.detectChanges();
>>>>>>> ba1aa79679156860d1a164ca6e9097b50928a102
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<<<<<<< HEAD

=======
>>>>>>> ba1aa79679156860d1a164ca6e9097b50928a102
