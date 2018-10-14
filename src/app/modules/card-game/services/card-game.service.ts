import { Injectable } from '@angular/core';
import { GameHistoryService } from '../../../core/services/game-history.service';
import { CardGame } from 'src/app/core/models/card-game';
import { Highscore } from 'src/app/core/models/highscore';

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

    saveToHighscores(currentGame: CardGame) {
        const newHighscore = this.transformCurrentGameToHighscore(currentGame);
        this.gameHistoryService.setNewHighscore(newHighscore);
    }

    private transformCurrentGameToHighscore(game: CardGame): Highscore {
        const { cards, ...highScore } = game;
        return highScore;
    }
}