import { Injectable } from '@angular/core';
import { GameHistoryService } from '../../../core/services/game-history.service';
import { CardGame } from 'src/app/core/models/card-game';

@Injectable()
export class CardGameService {
    constructor(
        private gameHistoryService: GameHistoryService
    ) { }

    getGameData(): CardGame {
        return this.gameHistoryService.getCurrentGame();
    }

    saveToHistory(currentGame: CardGame) {
        this.gameHistoryService.setCurrentGameHistory(currentGame);
    }
}