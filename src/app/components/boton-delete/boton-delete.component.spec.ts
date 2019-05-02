import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeleteComponent } from './boton-delete.component';

describe('BotonDeleteComponent', () => {
  let component: BotonDeleteComponent;
  let fixture: ComponentFixture<BotonDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
