import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
    constructor() { }

    @Input() icon!: string;
    @Output() onClick = new EventEmitter<void>();


}
