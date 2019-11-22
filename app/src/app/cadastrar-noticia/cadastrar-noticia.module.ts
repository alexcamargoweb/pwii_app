import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarNoticiaPageRoutingModule } from './cadastrar-noticia-routing.module';

import { CadastrarNoticiaPage } from './cadastrar-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarNoticiaPageRoutingModule
  ],
  declarations: [CadastrarNoticiaPage]
})
export class CadastrarNoticiaPageModule {}
