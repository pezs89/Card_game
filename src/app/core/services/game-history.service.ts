import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardGame } from '../models/card-game';
import { Card } from '../models/card';
import { CARD_TYPES } from '../constants/card-types';
import { Urls } from '../enums/urls';
import { v1 } from 'uuid';
import shuffle from 'shuffle.ts';

@Injectable()
export class GameHistoryService {
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
        console.log(currentGame);
        this.router.navigate(['/card-game']);
    }
}