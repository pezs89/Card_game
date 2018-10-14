import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighscoresComponent } from "./highscores.component";
import { HighscoresRoutingModule } from "./highscores.routing";

@NgModule({
    imports: [
        CommonModule,
        HighscoresRoutingModule
    ],
    declarations: [
        HighscoresComponent
    ]
})

export class HighscoresModule { }