import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./shared/components/page-not-found.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule'
    },
    {
        path: 'card-game',
        loadChildren: 'app/modules/card-game/card-game.module#CardGameModule',
    },
    {
        path: 'highscores',
        loadChildren: 'app/modules/highscores/highscores.module#HighscoresModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule { }