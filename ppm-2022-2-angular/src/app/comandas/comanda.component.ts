import { Component, Inject, OnInit } from '@angular/core';
import { Comanda } from './comanda.interface';
import { ComandaService } from './comanda.service';

@Component({
  selector: 'comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css'],
})
export class ComandaComponent implements OnInit {
  comanda: Comanda[] = [];

  constructor(private comandaService: ComandaService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.comandaService.getComandas().subscribe(
      (comanda) => {
        this.comanda = comanda;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(comanda: Comanda) {
    this.comandaService.remove(comanda).subscribe(
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
