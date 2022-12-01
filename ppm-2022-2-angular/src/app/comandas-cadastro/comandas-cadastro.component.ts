import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comanda } from '../comandas/comanda.interface';
import { ComandaService } from '../comandas/comanda.service';

@Component({
  selector: 'comandas-cadastro',
  templateUrl: './comandas-cadastro.component.html',
  styleUrls: ['./comandas-cadastro.component.css'],
})
export class ComandasCadastroComponent implements OnInit {
  comandaForm: FormGroup = this.formBuilder.group({
    id: 0,
    dataAtendimento: '2000-01-01',
    nomeCliente: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    valor: 0,
    comida: [
      '',
      [Validators.minLength(3), Validators.maxLength(150)],
    ],
    bebida: [
      '',
      [Validators.minLength(3), Validators.maxLength(150)],
    ],
    sobremesa: [
      '',
      [Validators.minLength(3), Validators.maxLength(150)],
    ],
    funcionarioId: 0,
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private comandaService: ComandaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.comandaService.getComanda(id).subscribe((comanda) => {
        console.log(comanda);
        this.comandaForm.patchValue(comanda);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.comandaForm.valid);
    console.log(this.comandaForm.value);

    const comanda: Comanda = this.comandaForm.value;

    if (comanda.id) {
      this.comandaService.update(comanda).subscribe(() => this.redirect());
    } else {
      this.comandaService.save(comanda).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listaComanda']);
  }
}
