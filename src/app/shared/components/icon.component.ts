import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon-component',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

export class IconComponent {
    @Input() iconPath: string;
}