import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

const routes: Routes = [
  { path: 'lista', component: LivrosListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
