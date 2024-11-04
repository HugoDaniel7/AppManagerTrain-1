import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';  
import firebase from 'firebase/compat/app';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SessaoService } from './sessao.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private afAuth: AngularFireAuth, private router: Router, private toastController: ToastController,private firestore: AngularFirestore,     private sessaoService: SessaoService) { }



  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duração em milissegundos
      position: 'middle', // Centralizado
      cssClass: 'custom-toast', // Classe CSS personalizada
    });
    toast.present();
  }
  

  async loginUsuario(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
  
      if (userCredential.user) {
        const uid = userCredential.user.uid;
        const userDoc = await this.firestore.collection('Usuários').doc(uid).get().toPromise();
  
        if (userDoc && userDoc.exists) {
          const usuarioData = userDoc.data();
          this.sessaoService.setUsuarioLogado(usuarioData); // Define os dados do usuário no SessaoService
          return usuarioData;
        } else {
          console.error("Usuário não encontrado no Firestore.");
          return null;
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return null;
      }
    }

  async googleLogin() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log('Login bem-sucedido');
      this.router.navigate(['/home'])
      this.presentToast('Login bem sucedido.');
    } catch (error) {
      console.log('Falha no login:');
    }
  }
  
  async registrarUsuario(email: string, password: string, name: string, cpf: string): Promise<void> {
    try {
      // Cria o usuário com email e senha no Authentication
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);

      if (userCredential.user) {
        const uid = userCredential.user.uid;

        // Salva o usuário no Firestore usando o mesmo UID
        await this.firestore.collection('Usuários').doc(uid).set({
          name: name,
          cpf: cpf,
          email: email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

      this.router.navigate(['/login']); // Navega para a página de tabs após o login
      this.presentToast('Cadastro bem sucedido, agora faça seu login.');
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      }
    }

  logout() {
    this.afAuth.signOut();
  }
}