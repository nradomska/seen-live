import {Component, OnInit} from '@angular/core'
import {RouterExtensions} from 'nativescript-angular/router'

import {Artist, Details} from "~/app/artists/artist.model";

import {ArtistsService} from "~/app/artists/artists.service";


@Component({
    moduleId: module.id,
    selector: 'ns-add-artist',
    templateUrl: './add-artist.component.html',
    styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {

    public artist: Artist;
    public hints: Array<Artist>;

    constructor(private routerExtensions: RouterExtensions,
                private artistsService: ArtistsService) {
    }

    ngOnInit() {
        this.artist = new Artist(this.artistsService.getNextArtistId(), '', null, []);
    }

    addArtist(artist: any) {
        this.artist.name = artist.name;
        this.artist.details = new Details(artist.name, artist.mbid, artist.url, artist.image);
        this.artistsService.addArtist(this.artist);
        console.log(this.artist);
        this.routerExtensions.back();
    }

    getArtistsList(event: any) {
        this.artistsService.searchArtists(event.value).then((response)=> {
            this.hints = <Artist[]>response;
        });
    }

}
