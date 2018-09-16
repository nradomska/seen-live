import {Injectable} from '@angular/core';
import {Artist} from "./artist.model";
import {RestService} from "~/app/pages/common/services/rest.service";

import artists from "~/app/pages/common/data/artists";

@Injectable()
export class ArtistsService {

    private artists: Array<Artist>;

    constructor(private restService: RestService) {
    }

    getArtists(): Array<Artist> {
        if (this.artists === undefined) {
            this.setArtists(<Artist[]> artists);
        }
        return this.artists;
    }

    setArtists(artists: Array<Artist>) {
        this.artists = artists;
    }

    getArtistById(artistId: number): Artist | boolean {
        const artistObj = this.getArtists().filter((artist) => {
            return artist.artistId == artistId;
        });

        if (artistObj.length === 0) {
            return false;
        }

        return artistObj[0];
    }

    getArtistDetails(artistName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.getArtistDetails(artistName).subscribe((response)=> {
                resolve(response);
            }, (error) => {
                console.log(error);
                reject();
            })
        });
    }
}