import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameHistoryService } from '../../core/services/game-history.service';
import { Highscore } from '../../core/models/highscore';

@Component({
    templateUrl: './highscores.component.html',
    styleUrls: ['./highscores.component.scss']
})

export class HighscoresComponent implements OnInit {
    highscores: Highscore[];
    hasActiveGame: boolean = false;

    constructor(
        private gameHistoryService: GameHistoryService,
        private router: Router
    ) { }

    ngOnInit() {
        this.highscores = this.gameHistoryService.getHighscores();
        this.hasActiveGame = !!this.gameHistoryService.getCurrentGame();
    }

    navigateTo(route: string) {
        this.router.navigate([route]);
    }
}