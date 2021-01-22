import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {ActivatedRoute}  from'@angular/router';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  //Variables del componente  
  artista: any = {};
  loading:boolean;
  topTracks:any[]=[];

  idTrack:string ="https://open.spotify.com/embed/track/3e9HZxeyfWwjeyPAMmWSSQ";
  
  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params =>{
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
    });
  }

  getArtista(id:string){
    this.loading = true;
      this.spotify.getArtista(id).subscribe(artista =>{
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      })
  }
  getTopTracks(id:string){
     this.spotify.getTopTracks(id).subscribe(topTracks =>{
       console.log(topTracks);
     
       this.topTracks = topTracks;
     });
  } 
}
