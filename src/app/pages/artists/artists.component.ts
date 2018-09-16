import {Component, OnInit, ViewChild, ElementRef} from '@angular/core'
import {RouterExtensions} from 'nativescript-angular/router'
import {SearchBar} from "ui/search-bar";
import * as utils from "utils/utils";

import {Artist} from "./artist.model";
import {ArtistsService} from "~/app/pages/artists/artists.service";


@Component({
    moduleId: module.id,
    selector: 'ns-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

    public artists: Array<Artist>;

    constructor(private routerExtensions: RouterExtensions,
                private artistsService: ArtistsService) {
    }

    ngOnInit() {
        this.getArtists();
    }

    getArtists() {
        this.artists = this.artistsService.getArtists();
    }

    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        this.filterArtists(searchBar.text);
    }

    filterArtists(searchPhrase: string) {
        if (searchPhrase.length === 0) {
            this.artists = this.artistsService.getArtists();
            return;
        }
        this.artists = this.artistsService.getArtists().filter((artist) => {
            return artist.name.toLocaleLowerCase().indexOf(searchPhrase.toLocaleLowerCase()) > -1;
        });

    }

    seeDetails(artistId: number) {
        this.routerExtensions.navigate(["/artist/" + artistId], {
            transition: {
                name: "flip",
                duration: 300,
                curve: "linear"
            }
        });
    }

    addArtist() {
        //TODO
    }

    dismissSoftKeybaord(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    }
}
