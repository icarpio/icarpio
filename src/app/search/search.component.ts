import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotiService) { }

  search(term: string) {
    if (term == '') {
      this.loading = false;
      this.artists = [];
    } else {
      this.loading = true;
      this.spotify.searchArtist(term).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      })
    }
  }
}
