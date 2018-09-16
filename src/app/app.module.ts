import {NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {ArtistsComponent} from "~/app/pages/artists/artists.component";
import {ArtistComponent} from "~/app/pages/artists/artist/artist.component";

import {RestService} from "~/app/pages/common/services/rest.service";
import {ArtistsService} from "~/app/pages/artists/artists.service";
import {DataService} from "~/app/pages/common/services/data.service";
import {ActionBarComponent} from "~/app/pages/action-bar/action-bar.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ArtistsComponent,
        ArtistComponent,
        ActionBarComponent
    ],
    providers: [
        RestService,
        DataService,
        ArtistsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
