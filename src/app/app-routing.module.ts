import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {ArtistsComponent} from "~/app/artists/artists.component";
import {ArtistComponent} from "~/app/artists/artist/artist.component";
import {AddArtistComponent} from "~/app/artists/add-artist/add-artist.component";



const routes: Routes = [
    { path: "", component: ArtistsComponent },
    { path: "artist/:id", component: ArtistComponent },
    { path: "add-artist", component: AddArtistComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
