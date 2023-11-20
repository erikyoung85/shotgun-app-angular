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

    isDragHovered = false;

    onDrop(event: CdkDragDrop<(Person | undefined)[]>) {
        this.isDragHovered = false;
        
        const item = event.previousContainer.data?.[event.previousIndex];
        this.selectedChange.emit(item)
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
