import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../core/models/card';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CardComponent {
    @Input() card: Card;
    @Output() onCardClick = new EventEmitter();
   
    onClick() {
        this.onCardClick.emit(this.card);
    }
}