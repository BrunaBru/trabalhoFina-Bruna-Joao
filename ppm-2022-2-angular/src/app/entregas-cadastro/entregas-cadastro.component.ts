import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrega } from '../entregas/entrega.interface';
import { EntregaService } from '../entregas/entrega.service';

@Component({
  selector: 'entregas-cadastro',
  templateUrl: './entregas-cadastro.component.html',
  styleUrls: ['./entregas-cadastro.component.css'],
})
export class EntregasCadastroComponent implements OnInit {
  entregaForm: FormGroup = this.formBuilder.group({
    id: 0,
    comandaId : 1,
    dataPedido: '2000-01-01',
    valorPedido: 0,
    endereco: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    cidade: [
      '',
      [Validators.minLength(5), Validators.maxLength(150), Validators.required],
    ],
    pago : true,
   
  });

  constructor(
    private formBuilder: FormBuilder,
    private entregaService: EntregaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.entregaService.getEntrega(id).subscribe((entrega) => {
        console.log(entrega);
        this.entregaForm.patchValue(entrega);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.entregaForm.valid);
    console.log(this.entregaForm.value);

    const entrega: Entrega = this.entregaForm.value;

    if (entrega.id) {
      this.entregaService.update(entrega).subscribe(() => this.redirect());
    } else {
      this.entregaService.save(entrega).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listaEntrega']);
  }
}
