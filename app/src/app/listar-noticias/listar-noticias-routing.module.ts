import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarNoticiasPage } from './listar-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: ListarNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarNoticiasPageRoutingModule {}
