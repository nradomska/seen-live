import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {ArtistsComponent} from "~/app/artists/artists.component";
import {ArtistComponent} from "~/app/artists/artist/artist.component";



const routes: Routes = [
    { path: "", component: ArtistsComponent },
    { path: "artist/:id", component: ArtistComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
