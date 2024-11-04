import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos-de-privacidade',
  templateUrl: './termos-de-privacidade.page.html',
  styleUrls: ['./termos-de-privacidade.page.scss'],
})
export class TermosDePrivacidadePage {
  constructor(private router: Router) {}

  // Função para navegar de volta para a página de perfil
  goBack() {
    this.router.navigate(['/perfil']);
  }
}
