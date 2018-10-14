import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardGameComponent } from './card-game.component';

const routes: Routes = [
    {
        path: 'card-game',
        component: CardGameComponent
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

export class CardGameRoutingModule { }