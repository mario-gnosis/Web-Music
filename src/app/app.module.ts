import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { AuthService } from './user/auth.service';
import { NewMusicComponent } from '../app/components/new-music/new-music.component';
import { AppRoutes, appRouterComponents } from './routerConfig';

// Access to Api
import { UserService } from './services/user/user.service';
import { SongsService } from './services/songs/songs.service';
import { ProfileService } from './services/profile/profile.service';
import { FavoritesService } from './services/favorites/favorites.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents,
    NewMusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    FormsModule
  ],
  providers: [UserService,
              SongsService,
              ProfileService,
              FavoritesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
