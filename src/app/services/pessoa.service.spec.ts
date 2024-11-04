import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoasCollection = this.firestore.collection<Pessoa>('Usuários');

  constructor(private firestore: AngularFirestore) {}

  addPessoa(pessoa: Pessoa) {
    return this.pessoasCollection.add({ email: pessoa.email, password: pessoa.password,
       name:pessoa.name, cpf:pessoa.cpf })
      .then(() => {
        console.log('Pessoa salva com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao salvar pessoa:', error);
      });
  }
}