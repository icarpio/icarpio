import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotiService {
  
  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  searchArtist(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer BQAKzKcHWLaFV8zBmh9peFjSkvNKn_eIh1J23tmiMNacKiFqM5VxtwRYVz2BYcWxZjaSEPm98YvjqymZtvs`
    });
    return this.http.get(url, {headers});
  }
  
  getArtist(id:string){
    return this.getQuery(`artists/${ id }`);
    //pipe( map( data => data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data => data['tracks']));
  }

}
