import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


  
  email: string = ""; // Garantindo que seja string
  password: string = ""; // Garantindo que seja string

  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  constructor(
    private authService: AuthService, 
    private menuController: MenuController, 
    private router: Router,
    private toastController: ToastController
  ) {}


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duração em milissegundos
      position: 'middle', // Centralizado
      cssClass: 'custom-toast', // Classe CSS personalizada
    });
    toast.present();
  }


  googleLogin() {
    this.authService.googleLogin();
  }

  ngAfterViewInit() {
    // Verifica se os elementos foram carregados corretamente
    if (this.menuButton && this.menuNav) {
      console.log('Elementos carregados com sucesso.');
    } else {
      console.error('Erro ao carregar os elementos');
    }
  }

  // Função para redirecionar para a página da Login
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Função para redirecionar para a página da EsqueciSenha
  navigateToEsqueciSenha() {
    this.router.navigate(['/esquecisenha']);
  }

  // Função para redirecionar para a página da Cadastro
  navigateToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  submitLogin() {
    this.authService.loginUsuario(this.email, this.password)
    .then(userData => {
      if (userData) {
        console.log("Usuário logado com sucesso!", userData);
        this.router.navigate(['/home']);
        this.presentToast('Login bem sucedido.');
      } else {
        console.log("Dados do usuário não encontrados.");
        this.presentToast('E-mail ou senha incorretos.');
      }
    })
  .catch(error => {
    console.error("Erro no login:", error);
  });
  }
}


