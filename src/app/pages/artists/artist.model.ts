export class Artist {

    public artistId: number;
    public name: string;
    public details: any;
    public places: Array<Place>;

    constructor(artistId: number,
                name: string,
                details: any,
                places: Array<Place>) {

        this.artistId = artistId;
        this.name = name;
        this.details;
        this.places = places;
    }
}

export class Place {

    public name: string;
    public date: string;

    constructor(name: string,
                date: string) {
        this.name = name;
        this.date = date;
    }
}

export class Details {
    public name: string;
    public mbid: string;
    public url: string;
    public image: Array<any>;

    constructor(name: string,
                mbid: string,
                url: string,
                image: Array<any>) {
        this.name = name;
        this.mbid = mbid;
        this.url = url;
        this.image = image;
    }
}