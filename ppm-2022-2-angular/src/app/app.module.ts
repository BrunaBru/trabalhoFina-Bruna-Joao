import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import '@angular/common/locales/global/pt';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FuncionariosCadastroComponent } from './funcionarios-cadastro/funcionarios-cadastro.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

import { ComandasCadastroComponent } from './comandas-cadastro/comandas-cadastro.component';
import { ComandaComponent } from './comandas/comanda.component';
import { EntregasCadastroComponent } from './entregas-cadastro/entregas-cadastro.component';
import { EntregaComponent } from './entregas/entregas.component';
const routes: Route[] = [
  
  {
    path: 'listagem-funcionario',
    component: FuncionariosComponent
  },
  {
    path: 'funcionarios-cadastro',
    component: FuncionariosCadastroComponent
  },
  {
    path: 'edicaoFuncionario/:id',
    component: FuncionariosCadastroComponent
  },

  {
    path: 'listagem-entrega',
    component: EntregaComponent
  },
  {
    path: 'entregas-cadastro',
    component: EntregasCadastroComponent
  },
  {
    path: 'edicaoEntregas/:id',
    component: EntregasCadastroComponent
  },

  {
    path: 'listagem-comanda',
    component: ComandaComponent
  },
  {
    path: 'comandas-cadastro',
    component: ComandasCadastroComponent
  },
  {
    path: 'edicaoComandas/:id',
    component: ComandasCadastroComponent
  },

  {
    path: '**',
    redirectTo: '/listagem-funcionario',
    pathMatch: 'full'
  },
  
]


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosCadastroComponent,
    FuncionariosComponent,
    EntregasCadastroComponent,
    EntregaComponent,
    ComandasCadastroComponent,
    ComandaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
