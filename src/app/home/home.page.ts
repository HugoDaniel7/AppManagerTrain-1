
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements AfterViewInit {

  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  // Variável para armazenar a data atual
  dataAtual: string = '';

  constructor(private menuController: MenuController, private router: Router) {this.dataAtual = this.obterDataAtual();} // Adicione o Router ao construtor

  ngAfterViewInit() {
    this.menuController.enable(true, 'menuId');
  }

  // Função para obter e formatar a data atual
  obterDataAtual(): string {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); 
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
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

  
