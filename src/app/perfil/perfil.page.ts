import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importação do Router
import { UserService } from '../services/user.service'; 
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { NavController } from '@ionic/angular';
import { SessaoService } from '../services/sessao.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})


export class PerfilPage implements AfterViewInit, OnInit {

  name: string = "";
  email: string = "";
  usuarioLogado: any;
  profilePhoto: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  headerPhoto: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';



  selectedImage: string | ArrayBuffer | null = null;

  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  // Referenciando o input do tipo file com o ViewChild
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(private menuController: MenuController, 
    private router: Router, 
    private userService: UserService, 
    private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore,     
    private sessaoService: SessaoService,
    private storage: AngularFirestore, 


    
  ) {}

  ngOnInit(): void {
    // Inscreve-se no BehaviorSubject para obter os dados do usuário
    this.sessaoService.usuarioLogado$.subscribe(usuarioData => {
      this.usuarioLogado = usuarioData;
    });
  }

  ngAfterViewInit() {
    // Verifica se os elementos foram carregados corretamente
    if (this.menuButton && this.menuNav) {
      // Adiciona o listener ao botão do menu para navegação
      this.menuButton.nativeElement.addEventListener('click', () => {
        // Redireciona para a página comunidade
        this.navigateToComunidade();
      });
    } else {
      console.error('Erro ao carregar os elementos');
    }
  }

// Função para disparar o clique no input de arquivo
  triggerFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();  // Dispara o clique no input de arquivo
    } else {
      console.error('Elemento fileInput não encontrado');
    }
  }

  // Função para tratar a seleção da imagem
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      // Quando o arquivo estiver pronto, atribua o resultado ao selectedImage
      reader.onload = () => {
        this.selectedImage = reader.result;  // reader.result é o conteúdo da imagem em base64
      };
      
      // Leia o arquivo como DataURL (base64)
      reader.readAsDataURL(input.files[0]);
    }
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

    // Função para navegar para a página de Termos de Serviço
    navigateToTermos() {
      this.router.navigate(['/termos-de-servico']);
    }

    navigateToPriva() {
      this.router.navigate(['/termos-de-privacidade']);
    }

    navigateToTermosDeUso() {
      this.router.navigate(['/termos-de-uso']);
    }
  

  // Função para fechar o menu
  closeMenu() {
    this.menuController.close(); // Fecha o menu atual
  }

  async getUserData() {
    const user = await this.afAuth.currentUser;

    if (user) {
      const uid = user.uid;
      this.firestore.collection('usuarios').doc(uid).valueChanges().subscribe((data: any) => {
        if (data) {
          this.name = data.name;  // Armazena o nome do usuário
          this.email = data.email; // Armazena o email do usuário
        } else {
          console.error("Nome ou email do usuário não encontrados no banco de dados.");
        }
      });
    } else {
      console.error("Usuário não autenticado.");
    }
  }


  logout() {
    this.afAuth.signOut().then(() => {
      // Após o logout, redireciona para a página inicial
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Erro ao fazer logout:', error);
    });
  }


  updatePhoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        this.profilePhoto = imageUrl;
        this.headerPhoto = imageUrl; // Sincroniza a imagem do header com a do perfil
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}








