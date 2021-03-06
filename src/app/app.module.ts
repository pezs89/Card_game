import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { CardGameModule } from './modules/card-game/card-game.module';
import { HomeModule } from './modules/home/home.module';
import { HighscoresModule } from './modules/highscores/highscores.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/components/header.component';

import '../assets/scss/main.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CardGameModule,
        HomeModule,
        HighscoresModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }