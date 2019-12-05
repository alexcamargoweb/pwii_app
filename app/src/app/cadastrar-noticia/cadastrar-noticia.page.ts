import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.page.html',
  styleUrls: ['./cadastrar-noticia.page.scss'],
})
export class CadastrarNoticiaPage implements OnInit {

  public loginForm: any;
  messageTitulo = ""
  messageDescricao = "";
  messageTipo = "";
  errorTitulo = false;
  errorDescricao = false;
  errorTipo = false;

  constructor(formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
    });
   }

   login() {
    let { titulo, descricao, tipo } = this.loginForm.controls;
 
    if (!this.loginForm.valid) {
      if (!titulo.valid) {
        this.errorTitulo = true;
        this.messageTitulo = "Ops! Preencha o título";
      } else {
        this.messageTitulo = "";
      }
 
      if (!descricao.valid) {
        this.errorDescricao = true;
        this.messageDescricao = "Ops! Preencha o descrição";
      } else {
        this.messageDescricao = "";
      }

      if (!tipo.valid) {
        this.errorTipo = true;
        this.messageTipo = "Ops! Preencha o tipo";
      } else {
        this.messageTipo = "";
      }

    }
    else {
      alert("Uhull! Tudo certo");
    }
  }   

  ngOnInit() {
  }



}
