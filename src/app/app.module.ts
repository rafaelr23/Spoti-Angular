import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/shared/loading/loading.component';

//Importacion de rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';



//Importacion peticiones Http
import { HttpClientModule } from '@angular/common/http';


//Importacion de Servicios
import { SpotifyService } from './services/spotify.service';

//Importacion de Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
