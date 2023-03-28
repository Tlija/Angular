import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeComponent } from './forme.component';

describe('FormeComponent', () => {
  let component: FormeComponent;
  let fixture: ComponentFixture<FormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
