import { Component, OnInit,Input } from '@angular/core';

//Importacion de Http para poder realizar consultas
// import { HttpClient } from '@angular/common/http';

//importacion de Servicios
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  //variables gobales del componente
  //paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: Boolean;
  error: boolean;
  mensajeError:string;
  //Creacion de variables Import
  constructor(
    // private http: HttpClient // Variable de Tipo HttpClient
    private spotify: SpotifyService
    ) {

      this.loading = true;
      this.error   = false;

      this.spotify.getNewReleases().subscribe((data:any) =>{
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
      },( errorServicio ) =>{
        this.loading = false;
        this.error   = true;
        console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
      });

  





    // Genereacion de consulta Get a URL espesifica 
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((paises:any) =>{
    //     this.paises = paises;
    //     console.log(paises);
    // });
  }

  ngOnInit(): void {
  }

}
