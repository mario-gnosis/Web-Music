import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../app/components/security/login/login.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FavoritesComponent } from '../app/components/favorites/favorites.component';
import { MusicListComponent } from '../app/components/music-list/music-list.component';
import { DetailsComponent } from '../app/components/details/details.component';
import { AuthGuard } from './components/security/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'music', component: MusicListComponent,  },
    { path: 'details', component: DetailsComponent },
    { path: 'details/:id', component: DetailsComponent },   
    { path: '', redirectTo: '/music', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }

export const appRouterComponents = [
  LoginComponent,
  HeaderComponent,
  FavoritesComponent,
  MusicListComponent,
  DetailsComponent,
 ];
