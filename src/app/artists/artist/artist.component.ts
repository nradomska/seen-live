import {Component, OnInit} from '@angular/core'
import {PageRoute} from "nativescript-angular/router";
import {switchMap} from "rxjs/operators";
import * as utils from "utils/utils";

import {ArtistsService} from "~/app/artists/artists.service";

import {Artist} from "~/app/artists/artist.model";

@Component({
    moduleId: module.id,
    selector: 'ns-artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    public artist: Artist | boolean;

    constructor(private pageRoute: PageRoute,
                private artistsService: ArtistsService) {
    }

    ngOnInit() {
        this.dismissSoftKeybaord();
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.artist = this.artistsService.getArtistById(params.id);
            if (this.artist !== false) {
                this.artistsService.getArtistDetails(this.artist['name']).then((response) => {
                    this.artist['details'] = response['artist'];
                })
            }
        });
    }

    goToLink(url: string) {
        utils.openUrl(url);
    }

    dismissSoftKeybaord() {
        utils.ad.dismissSoftInput();
    }

    addPlace() {
        //TODO
    }
}
