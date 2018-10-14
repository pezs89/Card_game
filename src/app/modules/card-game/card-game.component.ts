import { Component, OnInit } from '@angular/core';
import { CardGame } from 'src/app/core/models/card-game';
import { CardGameService } from './services/card-game.service';
import { Card } from 'src/app/core/models/card';
import { Router } from '@angular/router';

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
        if (!card.hasPairFound && !this.isInTheClickedCardsList(card)) {
            if (this.clickedCards.length < 2) {
                card.isFlipped = true;
                this.clickedCards.push(card);
            }
            if (this.clickedCards.length === 2) {
                this.cardGame.steps += 1;
                this.checkClickedCardsHasMatch();
            }
            if (this.isGameFinished()) {
                this.cardGameService.saveToHighscores(this.cardGame);
            } else {
                this.cardGameService.saveToHistory(this.cardGame);
            }
        }
    }

    navigateTo(route: string) {
        this.router.navigate([route]);
    }

    private isInTheClickedCardsList(card: Card): boolean {
        return !!this.clickedCards.find((clickedCard: Card) => card.id === clickedCard.id);
    }

    private checkCardTypeMatch(): boolean {
        if (this.clickedCards[0].type === this.clickedCards[this.clickedCards.length - 1].type) {
            return true;
        }
        return false;
    }

    private setPairsFoundToTrue(clickedCards: Card[]) {
        clickedCards.map((card: Card) => { card.hasPairFound = true });
    }

    private checkClickedCardsHasMatch() {
        if (this.checkCardTypeMatch()) {
            this.setPairsFoundToTrue(this.clickedCards);
            this.clickedCards = [];

        } else {
            setTimeout(() => {
                this.cardGame.cards.forEach((card: Card) => { if (!card.hasPairFound) card.isFlipped = false })
                this.clickedCards = [];
            }, 500)
        }
    }

    isGameFinished(): boolean {
        return this.cardGame.cards.filter((card: Card) => card.hasPairFound).length === this.cardGame.cards.length;
    }
}