import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { DAYToggleComponent, DAYToggleItemTmplDirective } from '@dayerlin-bustamante/toggle';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'toggle-examples',
    templateUrl: './toggle-examples.component.html',
    styleUrls: ['./toggle-examples.component.scss'],
    imports: [DAYToggleComponent, DAYToggleItemTmplDirective, DAYIconComponent, FormsModule, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class ToggleExamplesComponent {
    optionsIcons = signal<string[]>(['day-mail', 'day-chat']);

    toggleDisabled: string = 'Option 1';

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--toggle-left-background-color', description: 'Background color for the left toggle item.', default: 'var(--color-primary-400)' },
        { name: '--toggle-right-background-color', description: 'Background color for the right toggle item.', default: 'var(--color-secondary)' },
        { name: '--toggle-border-color', description: 'Border color of the toggle.', default: 'var(--color-primary-200)' },
        { name: '--toggle-background-color', description: 'Background color of the toggle.', default: 'var(--color-secondary-100)' },
        { name: '--toggle-item-width', description: 'Width of each toggle item.', default: '80px' },
        { name: '--toggle-item-height', description: 'Height of each toggle item.', default: '32px' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}