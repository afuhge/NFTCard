import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NftCardModule} from './nft-card/nft-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NftCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
