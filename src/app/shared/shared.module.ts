import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { IconComponent } from "./components/icon.component";
import { NotVisibleOnMobileDirective } from "./directives/not-visible-on-mobile.directive";
import { StartGameComponent } from "./components/start-game.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PageNotFoundComponent,
        IconComponent,
        NotVisibleOnMobileDirective,
        StartGameComponent
    ],
    declarations: [
        PageNotFoundComponent,
        IconComponent,
        NotVisibleOnMobileDirective,
        StartGameComponent
    ]
})

export class SharedModule { }