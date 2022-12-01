import { Component, Inject, OnInit } from '@angular/core';
import { Entrega } from './entrega.interface';
import { EntregaService } from './entrega.service';

@Component({
  selector: 'entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css'],
})
export class EntregaComponent implements OnInit {
  entrega: Entrega[] = [];

  constructor(private entregaService: EntregaService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.entregaService.getEntregas().subscribe(
      (entrega) => {
        this.entrega = entrega;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(entrega:Entrega) {
    this.entregaService.remove(entrega).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }


} 
