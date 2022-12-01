import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandasCadastroComponent } from './comandas-cadastro.component';

describe('ComandasCadastroComponent', () => {
  let component: ComandasCadastroComponent;
  let fixture: ComponentFixture<ComandasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandasCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
