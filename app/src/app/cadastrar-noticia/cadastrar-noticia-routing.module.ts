import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarNoticiaPage } from './cadastrar-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarNoticiaPageRoutingModule {}
