import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotiService } from '../spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist:any = [];
  topTracks:any = [];
  loading:boolean;

  constructor(private router:ActivatedRoute, private _spotify:SpotiService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id'])
    })
   }

   getArtist(id:string){
    this.loading = true;
      this._spotify.getArtist(id).subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      })
   }

   getTopTracks(id:string){
    this._spotify.getTopTracks(id).subscribe(topTracks =>{
      this.topTracks = topTracks;
    })
   }
}
