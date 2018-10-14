import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardGame } from '../models/card-game';
import { Card } from '../models/card';
import { CARD_TYPES } from '../constants/card-types';
import { Highscore } from '../models/highscore';
import { Urls } from '../enums/urls';
import { v1 } from 'uuid';
import shuffle from 'shuffle.ts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GameHistoryService {
    private newGame: BehaviorSubject<CardGame> = new BehaviorSubject(null);
    newGameObservable: Observable<CardGame> = this.newGame.asObservable();
    
    constructor(
        private router: Router
    ) { }

    private initializeGame(deckSize: number): Card[] {
        const cardsList = [...CARD_TYPES.slice(0, deckSize), ...CARD_TYPES.slice(0, deckSize)];
        const cards: Card[] = cardsList.map(cardType => {
            return {
                id: v1(),
                isFlipped: false,
                type: cardType,
                imageUrl: Urls.assetsUrl + cardType + '.png',
                hasPairFound: false
            }
        });
        return shuffle(cards);
    }

    createGame(deckSize: number) {
        const currentGame: CardGame = {
            id: v1(),
            steps: 0,
            cards: this.initializeGame(deckSize)
        }
        this.setCurrentGameHistory(currentGame);
        this.newGame.next(currentGame);
        this.router.navigate(['/card-game']);
    }

    private deleteCurrentGame() {
        localStorage.removeItem('currentGame');
    }

    getCurrentGame(): CardGame {
        return this.getCurrentGameHistory();
    }

    getCurrentGameHistory(): CardGame {
        const currentGameJson = localStorage.getItem('currentGame');
        if (currentGameJson) {
            const parsedCurrentGame = JSON.parse(currentGameJson);
            this.newGame.next(parsedCurrentGame);
            return parsedCurrentGame;
        }
        return undefined;
    }

    setCurrentGameHistory(game: CardGame) {
        localStorage.setItem('currentGame', JSON.stringify(game));
    }

    getHighscores(): Highscore[] {
        const highscores = localStorage.getItem('highscores');
        if (highscores) {
            return JSON.parse(highscores);
        }
        return undefined;
    }

    createNewHighscore(highscores: Highscore[] = [], newHighscore: Highscore): Highscore[] {
        const newHighscores = [...highscores];
        newHighscores.push(newHighscore);
        if (highscores.length === 1) {
            return newHighscores;
        } else {
            newHighscores.sort((a, b) => a.steps - b.steps);
            return newHighscores.reduce((newHighscoesArray: Highscore[], highscore: Highscore, index) => {
                if (index < 3) {
                    newHighscoesArray.push(highscore)
                }
                return newHighscoesArray;
            }, []);
        }
    }

    setNewHighscore(newHighscore: Highscore) {
        this.deleteCurrentGame();
        const highscores = this.getHighscores();
        const newHighscores = this.createNewHighscore(highscores, newHighscore);
        localStorage.setItem('highscores', JSON.stringify(newHighscores));
    }
}