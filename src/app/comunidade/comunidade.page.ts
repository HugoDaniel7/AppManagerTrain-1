import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.page.html',
  styleUrls: ['./comunidade.page.scss'],
})
export class ComunidadePage implements AfterViewInit {
  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  novoPost: any = { usuario: '', texto: '', arquivo: null }; // Inicializando novoPost
  posts: any[] = []; // Array para armazenar as postagens
  mostrarFormulario: boolean = false; // Controla a exibição do formulário

  constructor(private menuController: MenuController, private router: Router) {}

  // Ciclo de vida para interagir com a DOM depois de renderizada
  ngAfterViewInit() {
    if (this.menuButton && this.menuNav) {
      this.menuButton.nativeElement.addEventListener('click', () => {
        this.navigateToComunidade();
      });
    } else {
      console.error('Erro ao carregar os elementos');
    }
  }

  // Funções de navegação
  navigateToComunidade() {
    this.router.navigate(['/comunidade']);
  }

  navigateToMapa() {
    this.router.navigate(['/mapalocal']);
  }

  navigateToDicas() {
    this.router.navigate(['/dicas']);
  }

  navigateToSobreNos() {
    this.router.navigate(['/sobrenos']);
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToSair() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  closeMenu() {
    this.menuController.close();
  }

  // Função para alternar a exibição do formulário
  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario; // Alterna a exibição do formulário
  }

  // Função para adicionar a nova postagem
  adicionarPost(event: Event) {
    event.preventDefault();

    // Adiciona o novo post na lista se os campos obrigatórios estiverem preenchidos
    if (this.novoPost.usuario && this.novoPost.texto) {
      const novoPostagem = {
        usuario: this.novoPost.usuario,
        texto: this.novoPost.texto,
        arquivo: this.novoPost.arquivo,
      };

      console.log("Lista de postagens:", this.posts);
      console.log("Nova postagem:", novoPostagem); // Verifica os dados da nova postagem
      
      this.posts.push(novoPostagem);
      console.log("Postagens:", this.posts); // Para verificar as postagens

      // Limpa o formulário
      this.novoPost = { usuario: '', texto: '', arquivo: null };

      // Fecha o formulário após adicionar a postagem
      this.toggleForm();
    } else {
      console.error("Usuário e texto são obrigatórios!"); // Mensagem de erro se campos não preenchidos
    }
  }

  // Processa o arquivo de imagem/vídeo
  processarArquivo(event: any) {
    const arquivo = event.target.files[0];
    const leitor = new FileReader();

    leitor.onload = () => {
      this.novoPost.arquivo = leitor.result;
    };

    leitor.readAsDataURL(arquivo);
  }

  // Verifica se o arquivo é um vídeo
  isVideo(file: string): boolean {
    return file.includes('video');
  }
}
