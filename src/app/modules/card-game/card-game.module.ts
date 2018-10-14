import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "./card-game.component";
import { CardGameRoutingModule } from "./card-game.routing";

@NgModule({
    imports: [
        CommonModule,
        CardGameRoutingModule
    ],
    declarations: [
        CardGameComponent,
    ],
    providers: [
    ]
})

export class CardGameModule { }