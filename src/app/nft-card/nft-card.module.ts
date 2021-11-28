import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftCardComponent } from './nft-card.component';



@NgModule({
    declarations: [
        NftCardComponent
    ],
    exports: [
        NftCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NftCardModule { }
