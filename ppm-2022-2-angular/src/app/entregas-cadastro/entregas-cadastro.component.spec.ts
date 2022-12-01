import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasCadastroComponent } from './entregas-cadastro.component';

describe('EntregasCadastroComponent', () => {
  let component: EntregasCadastroComponent;
  let fixture: ComponentFixture<EntregasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
