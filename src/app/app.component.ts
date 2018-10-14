import { Component, OnInit } from '@angular/core';
import { GameHistoryService } from './core/services/game-history.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private gameHistoryService: GameHistoryService
    ) { }

    ngOnInit() {
        const hasNotFinishedGame = !!this.gameHistoryService.getCurrentGameHistory();
        if (hasNotFinishedGame) {
            this.router.navigate(['/card-game']);
        } else {
            this.router.navigate(['/home'])
        }
    }
}