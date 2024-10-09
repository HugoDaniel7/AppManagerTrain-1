import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; // Importação do Router


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements AfterViewInit {

 // Referência ao botão e ao menu usando ViewChild
 @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
 @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

 constructor(private router: Router) {}

 ngAfterViewInit() {
  // Verifica se os elementos foram carregados corretamente
  if (this.menuButton && this.menuNav) {
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

  // Função para redirecionar para a página da home
  navigateToHome() {
    this.router.navigate(['/home']);
  } 
}



export class Cadastropage {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      // Aqui você pode salvar os dados no local storage se necessário
      // localStorage.setItem('cadastro', JSON.stringify(form.value));
      this.router.navigate(['http://localhost:8100/login']); // Redireciona para a página de login
    } else {
      console.log('Formulário inválido');
    }
  }
}

