import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { NavbarComponent } from './navbar/navbar.component';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { SpotiService } from './spoti.service';
import { CardsComponent } from './cards/cards.component';
import { LoadingComponent } from './loading/loading.component';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    CountriesComponent,
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [SpotiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
