import { Directive, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[notVisibleOnMobile]'
})

export class NotVisibleOnMobileDirective implements OnInit {
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        if (event.target.innerWidth < 612) {
            this.toggleElementVisibility('none');
        } else {
            this.toggleElementVisibility();
        }
    }

    ngOnInit() {
        if (window.innerWidth < 612) {
            this.toggleElementVisibility('none');
        }
    }

    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) { }

    toggleElementVisibility(value: string = 'flex') {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
    }
}