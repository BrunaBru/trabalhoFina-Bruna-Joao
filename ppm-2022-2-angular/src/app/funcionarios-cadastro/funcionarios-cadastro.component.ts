import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionarios/funcionario.interface';
import { FuncionarioService } from '../funcionarios/funcionario.service';

@Component({
  selector: 'funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.component.html',
  styleUrls: ['./funcionarios-cadastro.component.css'],
})
export class FuncionariosCadastroComponent implements OnInit {
  funcForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(200)],
    ],
    endereco: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(150)],
    ],
    cidade: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(150)],
    ],
    dataAdmissao: '2000-01-01',
    cpf: ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    cargo: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.funcionarioService.getFuncionario(id).subscribe((funcionario) => {
        console.log(funcionario);
        this.funcForm.patchValue(funcionario);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.funcForm.valid);
    console.log(this.funcForm.value);

    const funcionario: Funcionario = this.funcForm.value;

    if (funcionario.id) {
      this.funcionarioService.update(funcionario).subscribe(() => this.redirect());
    } else {
      this.funcionarioService.save(funcionario).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/listaFuncionario']);
  }
}
