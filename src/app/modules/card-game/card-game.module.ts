import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "./card-game.component";
import { CardComponent } from "./components/card.component";
import { CardGameRoutingModule } from "./card-game.routing";
import { CardGameService } from "./services/card-game.service";


@NgModule({
    imports: [
        CommonModule,
        CardGameRoutingModule
    ],
    declarations: [
        CardGameComponent,
        CardComponent
    ],
    providers: [
        CardGameService
    ]
})

export class CardGameModule { }