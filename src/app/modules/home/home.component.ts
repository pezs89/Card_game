import { Component } from '@angular/core';
import { GameHistoryService } from '../../core/services/game-history.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor(
        private gameHistoryService: GameHistoryService
    ) { }

    startNewGame(deckSize: number) {
        this.gameHistoryService.createGame(deckSize);
    }
}