import { Injectable             } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map                    } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Hola Rafa");
   }


   
  getQuery(query:string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = new HttpHeaders({
      'Authorization':'Bearer BQAlJ0YnEhFPZw-KfchsdiZ4d7NTl7nROYF0HitLAhsjKyR03Ru36twY7Mze5LK-mE-06jYFOKTVIJVI5EE'
    });

    return this.http.get(URL,{headers:HEADERS});
  }


  getNewReleases(){
  
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data=>{
          return data['albums'].items;  
    }));

  }



  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data =>{
      return data['artists'].items; 
    }));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);//.pipe(map(data =>{
      //return data['artists'].items; 
    //}));
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map(data =>{
      return data['tracks'];
    }));
  }
}
