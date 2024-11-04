import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SessaoService } from '../services/sessao.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
  usuarioLogado: any;

  constructor(
    private menuController: MenuController, 
    private router: Router, 
    private afAuth: AngularFireAuth, 
    private sessaoService: SessaoService
  ) {}

  ngOnInit(): void {
    // Inscreve-se no BehaviorSubject para obter os dados do usuário
    this.sessaoService.usuarioLogado$.subscribe(usuarioData => {
      this.usuarioLogado = usuarioData;
    });
  }

  // Ciclo de vida para interagir com a DOM depois de renderizada
  ngAfterViewInit() {
    this.menuController.enable(true, 'menuId');
  }

  // Funções de navegação
  navigateToComunidade() {
    this.router.navigate(['/comunidade']);
    this.menuController.close();
  }

  navigateToMapa() {
    this.router.navigate(['/mapalocal']);
    this.menuController.close();
  }

  navigateToDicas() {
    this.router.navigate(['/dicas']);
    this.menuController.close();
  }

  navigateToSobreNos() {
    this.router.navigate(['/sobrenos']);
    this.menuController.close();
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
    this.menuController.close();
  }

  navigateToSair() {
    this.router.navigate(['/login']);
    this.menuController.close();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    this.menuController.close();
  }

  closeMenu() {
    this.menuController.close();
  }

  // Função para alternar a exibição do formulário
  toggleForm() {
    this.mostrarFormulario = !this.mostrarFormulario; // Alterna a exibição do formulário
  }

  // Função para adicionar a nova postagem
  // Função para adicionar a nova postagem
adicionarPost(event: Event) {
  event.preventDefault();

  // Adiciona o novo post na lista se o texto estiver preenchido
  if (this.novoPost.texto) {
    const novoPostagem = {
      usuario: this.usuarioLogado.name || 'Usuário Anônimo', // Use o nome do usuário logado
      texto: this.novoPost.texto,
      arquivo: this.novoPost.arquivo,
    };

    console.log("Lista de postagens:", this.posts);
    console.log("Nova postagem:", novoPostagem); // Verifica os dados da nova postagem
    
    this.posts.push(novoPostagem);
    console.log("Postagens:", this.posts); // Para verificar as postagens

    // Limpa o formulário
    this.novoPost = { texto: '', arquivo: null };

    // Fecha o formulário após adicionar a postagem
    this.toggleForm();
  } else {
    console.error("Texto é obrigatório!"); // Mensagem de erro se campo não preenchido
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
