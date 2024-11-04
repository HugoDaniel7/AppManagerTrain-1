import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos-de-servico',
  templateUrl: './termos-de-servico.page.html',
  styleUrls: ['./termos-de-servico.page.scss'],
})
export class TermosDeServicoPage {
  constructor(private router: Router) {}

  // Função para navegar de volta para a página de perfil
  goBack() {
    this.router.navigate(['/perfil']);
  }
}
