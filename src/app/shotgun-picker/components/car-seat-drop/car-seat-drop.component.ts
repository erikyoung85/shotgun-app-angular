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
    @Input() disabled = false;
    @Output() disabledChange = new EventEmitter<boolean>();
    @Input() placeholder?: string | undefined = 'Drag a person here';

    isDragHovered = false;

    onToggleDisabled() {
        this.disabledChange.emit(!this.disabled);
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
