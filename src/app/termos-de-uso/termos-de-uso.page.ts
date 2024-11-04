import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos-de-uso',
  templateUrl: './termos-de-uso.page.html',
  styleUrls: ['./termos-de-uso.page.scss'],
})
export class TermosDeUsoPage {
  constructor(private router: Router) {}

  // Função para navegar de volta para a página de perfil
  goBack() {
    this.router.navigate(['/perfil']);
  }
}
