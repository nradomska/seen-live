import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

    private lastFmApiKey = 'ab18641965a1bf279309aeb4f72fc701';
    private lastFmApiUrl = 'http://ws.audioscrobbler.com/2.0/';

    constructor() {
    }

    getLastFmApiKey() {
        return this.lastFmApiKey;
    }

    getLastFmApiUrl() {
        return this.lastFmApiUrl;
    }
}


