import {Injectable} from '@angular/core';
import {Artist} from "./artist.model";

import artists from "~/app/common/data/artists";
import {RestService} from "~/app/common/services/rest.service";

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
        this.artists = artists.sort(this.sortByName);
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

    searchArtists(keyword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.searchArtists(keyword).subscribe((response)=> {
                resolve(response['results']['artistmatches']['artist']);
            }, (error) => {
                console.log(error);
                reject();
            })
        });
    }

    getNextArtistId(): number {
        let orderedArtists = [...this.artists];
        orderedArtists.sort(this.sortById);
        return orderedArtists[orderedArtists.length - 1].artistId + 1;
    }

    addArtist(artist: Artist) {
        this.getArtists().push(artist);
        this.artists.sort(this.sortByName);
    }

    sortByName(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    sortById(a, b) {
        if (a.artistId < b.artistId)
            return -1;
        if (a.artistId > b.artistId)
            return 1;
        return 0;
    }
}
