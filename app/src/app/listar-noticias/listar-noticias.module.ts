import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarNoticiasPageRoutingModule } from './listar-noticias-routing.module';

import { ListarNoticiasPage } from './listar-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarNoticiasPageRoutingModule
  ],
  declarations: [ListarNoticiasPage]
})
export class ListarNoticiasPageModule {}
