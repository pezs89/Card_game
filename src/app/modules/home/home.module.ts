import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../shared/shared.module";
import { GameHistoryService } from "../../core/services/game-history.service";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        GameHistoryService
    ]
})

export class HomeModule { }