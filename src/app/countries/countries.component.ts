import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  

  
  countries:any[] = [];
  //Subscribir --> Estar escuchando los cambios o la informacion que este servicio pueda regresar
  constructor(private http:HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any) => {
      this.countries = data;
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
