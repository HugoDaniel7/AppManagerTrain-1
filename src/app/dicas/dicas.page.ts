import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})
export class DicasPage implements AfterViewInit {

  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  constructor(private menuController: MenuController, private router: Router) {}

  ngAfterViewInit() {
    this.menuController.enable(true, 'menuId');
  }

  // Função para redirecionar para a página da comunidade
  navigateToComunidade() {
    this.router.navigate(['/comunidade']);
  }

  // Função para redirecionar para a página da mapa
  navigateToMapa() {
    this.router.navigate(['/mapalocal']);
  }

  // Função para redirecionar para a página da dicas
  navigateToDicas() {
    this.router.navigate(['/dicas']);
  }

   // Função para redirecionar para a página da Sobre Nós
   navigateToSobreNos() {
    this.router.navigate(['/sobrenos']);
  }
  
   // Função para redirecionar para a página da perfil
   navigateToPerfil() {
    this.router.navigate(['/perfil']);
  } 

   // Função para redirecionar para a página da login
   navigateToSair() {
    this.router.navigate(['/login']);
  } 

   // Função para redirecionar para a página da home
   navigateToHome() {
    this.router.navigate(['/home']);
  } 

  // Função para fechar o menu
  closeMenu() {
    this.menuController.close(); // Fecha o menu atual
  }
}