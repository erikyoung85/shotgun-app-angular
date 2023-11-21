import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../store/state/shotgun-picker.state';

@Component({
    selector: 'app-car-seat-drop',
    templateUrl: './car-seat-drop.component.html',
    styleUrls: ['./car-seat-drop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarSeatDropComponent {
    @Input() selected: Passenger | undefined;
    @Output() selectedChange = new EventEmitter<Passenger | undefined>();
    @Input() disabled = false;
    @Output() disabledChange = new EventEmitter<boolean>();
    @Input() placeholder?: string | undefined = 'Drag a person here';

    isDragHovered = false;

    onToggleDisabled() {
        this.disabledChange.emit(!this.disabled);
    }

    onDrop(event: CdkDragDrop<(Passenger)[]>) {
        this.isDragHovered = false;

        if (event.container !== event.previousContainer && !this.disabled) {
            const newPassenger = event.previousContainer.data?.[event.previousIndex];
            this.selectedChange.emit(newPassenger)
        }
    }

    onDragEntered() {
        console.log('drag entered');
        this.isDragHovered = true;
    }

    onDragExited() {
        console.log('drag exited');
        this.isDragHovered = false;
    }
}
