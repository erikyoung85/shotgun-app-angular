import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../store/state/shotgun-picker.state';

@Component({
    selector: 'app-car-seat-drop',
    templateUrl: './car-seat-drop.component.html',
    styleUrls: ['./car-seat-drop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarSeatDropComponent {
    @Input() selected: Person | undefined;
    @Output() selectedChange = new EventEmitter<Person | undefined>();
    @Input() placeholder?: string | undefined = 'Drag a person here';

    disabled = false;
    isDragHovered = false;

    onToggleDisabled() {
        this.disabled = !this.disabled;

        if (this.disabled && this.selected !== undefined) {
            this.selectedChange.emit(undefined);
        }
    }

    onDrop(event: CdkDragDrop<(Person)[]>) {
        this.isDragHovered = false;

        if (event.container !== event.previousContainer && !this.disabled) {
            const newPerson = event.previousContainer.data?.[event.previousIndex];
            this.selectedChange.emit(newPerson)
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
