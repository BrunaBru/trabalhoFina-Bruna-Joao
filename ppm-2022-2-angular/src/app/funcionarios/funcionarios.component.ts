import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario.interface';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
 funcionarios: Funcionario[] =[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.funcionarioService.getFuncionarios().subscribe(
      (funcionarios) => {
        this.funcionarios = funcionarios;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(funcionario: Funcionario) {
    this.funcionarioService.remove(funcionario).subscribe(
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
