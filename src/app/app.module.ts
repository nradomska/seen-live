import {NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {ArtistsComponent} from "~/app/artists/artists.component";
import {ArtistComponent} from "~/app/artists/artist/artist.component";
import {ActionBarComponent} from "~/app/action-bar/action-bar.component";
import {FloatingButtonComponent} from "~/app/floating-button/floating-button.component";


import {RestService} from "~/app/common/services/rest.service";
import {DataService} from "~/app/common/services/data.service";
import {ArtistsService} from "~/app/artists/artists.service";



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
        ActionBarComponent,
        FloatingButtonComponent
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
