import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontecimentoFormComponent } from './acontecimento-form.component';

describe('AcontecimentoFormComponent', () => {
  let component: AcontecimentoFormComponent;
  let fixture: ComponentFixture<AcontecimentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontecimentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontecimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
