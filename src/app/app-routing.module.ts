import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  {path: 'list',loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)},
  { path: 'empresa1', loadChildren: () => import('./empresa1/empresa1.module' ).then(m => m.Empresa1PageModule)},
  { path: 'empresa2', loadChildren: './empresa2/empresa2.module#Empresa2PageModule' },
  { path: 'empresa3', loadChildren: './empresa3/empresa3.module#Empresa3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

