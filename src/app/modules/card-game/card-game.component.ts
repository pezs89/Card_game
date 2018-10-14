import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardGameService } from './services/card-game.service';
import { CardGame } from 'src/app/core/models/card-game';
import { Card } from 'src/app/core/models/card';

@Component({
    templateUrl: './card-game.component.html',
    styleUrls: ['./card-game.component.scss']
})

export class CardGameComponent implements OnInit {
    cardGame: CardGame;
    private clickedCards: Card[] = [];

    constructor(
        private cardGameService: CardGameService,
        private router: Router
    ) { }

    ngOnInit() {
        this.cardGame = this.cardGameService.getGameData();
        this.clickedCards = this.cardGame.cards.filter((card: Card) => card.isFlipped && !card.hasPairFound);
    }

    onCardClicked(card: Card) {
        if (!card.hasPairFound) {
            this.cardGame.steps += 1;
            if (this.isInTheClickedCardsList(card)) {
                this.removeCardFromClickedCardList(card);
                card.isFlipped = false;
            } else if (!this.isInTheClickedCardsList(card) &&
                this.clickedCards.length < 2) {
                card.isFlipped = true;
                this.clickedCards.push(card);
            }
        }
    }

    private isInTheClickedCardsList(card: Card): boolean {
        return !!this.clickedCards.find((clickedCard: Card) => card.id === clickedCard.id);
    }

    private removeCardFromClickedCardList(card: Card) {
        const cardIndex = this.clickedCards.findIndex((clickedCard: Card) => clickedCard.id === card.id);
        this.clickedCards.splice(cardIndex);
    }
}