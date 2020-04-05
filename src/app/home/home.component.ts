import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotiService } from '../spoti.service';

//Map transforma la informacion en bruto

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  newSongs: any[] = [];
  error:boolean= false;
  message:string;
  //Subscribir --> Estar escuchando los cambios o la informacion que este servicio pueda regresar
  
  constructor(private spotify: SpotiService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    },errorService=>{
      this.error = true;
      this.loading = false;
      this.message = errorService.error.error.message;
    })
  }
  ngOnInit() {

  }

}
