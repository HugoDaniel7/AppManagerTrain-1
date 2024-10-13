import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menuController: MenuController) {}

  // Navegação com fechamento do menu
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.menuController.close(); // Fecha o menu ao navegar
  }
}