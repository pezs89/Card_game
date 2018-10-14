import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighscoresComponent } from './highscores.component';

const routes: Routes = [
    {
        path: 'highscores',
        component: HighscoresComponent
    }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class HighscoresRoutingModule { }