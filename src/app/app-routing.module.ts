
import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CountriesComponent } from './countries/countries.component';
import { ArtistComponent } from './artist/artist.component';


export const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'artist/:id',component:ArtistComponent},
  {path:'countries',component:CountriesComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',pathMatch:'full',redirectTo:'home'},
];


