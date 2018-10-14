import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'start-game',
    templateUrl:'./start-game.component.html',
    styleUrls: ['./start-game.component.scss']
})

export class StartGameComponent {
    @Input() rowAlignment: boolean;
    @Output() startNewGame = new EventEmitter();
    
    deckSizes: number[] = [
        3, 4, 5, 6, 7, 8, 9, 10
    ];

    start(deckSize: number) {
        this.startNewGame.emit(deckSize);
    }
}