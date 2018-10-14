import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameHistoryService } from '../services/game-history.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    get isStartGameVisible(): boolean {
        return !this.router.url.includes('home');
    }
    constructor(
        private router: Router,
        private gameHistoryService: GameHistoryService
    ) { }

    navigateTo(route: string) {
        if (!route.includes(this.router.url)) {
            this.router.navigate([route])
        }
    }

    startNewGame(deckSize: number) {
        this.gameHistoryService.createGame(deckSize);
    }
}