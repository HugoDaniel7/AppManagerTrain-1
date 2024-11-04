import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  getCurrentUserData(): Observable<any> {
    return new Observable(observer => {
      this.afAuth.onAuthStateChanged(user => {
        if (user) {
          const userId = user.uid;
          this.firestore.collection('users').doc(userId).valueChanges().subscribe(userData => {
            observer.next(userData);
          }, error => {
            observer.error(error);
          });
        } else {
          observer.error('Usuário não autenticado');
        }
      });
    });
  }
}

