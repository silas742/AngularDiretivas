import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBotao = "Esconder/Exibir";
  esconder = false;

  cursos = [
    { nome: "Analise de sistemas", disponibilidade: "Indisponivel"  },
    { nome: "Eventos", disponibilidade: "Disponivel" }
  ]
  adicionar(nome, disponibilidade) { 
    this.cursos = [{ nome: nome, disponibilidade: disponibilidade }, ...this.cursos]; 
  }
  alterarExibicao() {
    this.esconder = !this.esconder;
  }
}
