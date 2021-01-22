import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  constructor( private _routes:Router) { }

  ngOnInit(): void {
  }
  verArtista(item:any){
    let artisId;
    if(item.type ==='artist'){
      artisId = item.id;
    } else{
      artisId = item.artists[0].id;
    }
    this._routes.navigate(['/artist',artisId]);
  }
}
