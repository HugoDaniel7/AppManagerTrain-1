import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mapalocal',
    loadChildren: () => import('./mapalocal/mapalocal.module').then( m => m.MapalocalPageModule)
  },
  {
    path: 'comunidade',
    loadChildren: () => import('./comunidade/comunidade.module').then( m => m.ComunidadePageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./sobrenos/sobrenos.module').then( m => m.SobrenosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'esquecisenha',
    loadChildren: () => import('./esquecisenha/esquecisenha.module').then( m => m.EsquecisenhaPageModule)
  },
  {
    path: 'termos-de-servico',
    loadChildren: () => import('./termos-de-servico/termos-de-servico.module').then( m => m.TermosDeServicoPageModule)
  },
  {
    path: 'termos-de-privacidade',
    loadChildren: () => import('./termos-de-privacidade/termos-de-privacidade.module').then( m => m.TermosDePrivacidadePageModule)
  },
  {
    path: 'termos-de-uso',
    loadChildren: () => import('./termos-de-uso/termos-de-uso.module').then( m => m.TermosDeUsoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
