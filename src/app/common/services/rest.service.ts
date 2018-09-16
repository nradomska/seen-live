import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {DataService} from "~/app/common/services/data.service";
import {Details, Artist} from "~/app/artists/artist.model";

@Injectable()
export class RestService {

    constructor(private http: HttpClient,
                private dataService: DataService) {
    }

    getArtistDetails(artistName: string) {
        return this.http.get<Details[]>(this.dataService.getLastFmApiUrl() +
            '?method=artist.getinfo' +
            '&artist=' + artistName +
            '&api_key=' + this.dataService.getLastFmApiKey() +
            '&format=json'
        );
    }

    searchArtists(keyword: string) {
        return this.http.get(this.dataService.getLastFmApiUrl() +
            '?method=artist.search' +
            '&artist=' + keyword +
            '&api_key=' + this.dataService.getLastFmApiKey() +
            '&limit=' + 20 +
            '&format=json'
        );
    }
}

