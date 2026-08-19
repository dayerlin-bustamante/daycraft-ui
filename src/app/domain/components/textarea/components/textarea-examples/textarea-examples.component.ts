import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTextareaComponent } from '@dayerlin-bustamante/textarea';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'textarea-examples',
    templateUrl: './textarea-examples.component.html',
    styleUrls: ['./textarea-examples.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYLabelComponent, DAYTextareaComponent, ReactiveFormsModule, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class TextareaExamplesComponent {
    formGroup: FormGroup = new FormGroup({
        formControl: new FormControl(null, Validators.required),
        formControlDisabled: new FormControl({ value: null, disabled: true }, Validators.required)
    });

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--textarea-background-color', description: 'Sets the background color of the textarea.', default: 'transparent' },
        { name: '--textarea-border-color', description: 'Sets the border color of the textarea.', default: 'var(--color-neutral-200)' },
        { name: '--textarea-border-radius', description: 'Sets the border radius (rounded corners) of the textarea.', default: 'var(--radius-s)' },
        { name: '--textarea-caret-color', description: 'Sets the color of the caret (text cursor).', default: 'var(--color-secondary)' },
        { name: '--textarea-color', description: 'Sets the text color inside the textarea.', default: 'var(--color-neutral-300)' },
        { name: '--textarea-height', description: 'Sets the height of the textarea.', default: '92px' },
        { name: '--textarea-padding-right', description: 'Sets the right padding inside the textarea.', default: 'var(--spacing-sm)' },
        { name: '--textarea-padding-left', description: 'Sets the left padding inside the textarea.', default: 'var(--spacing-sm)' },
        { name: '--textarea-padding-top', description: 'Sets the top padding inside the textarea.', default: 'var(--spacing-s)' },
        { name: '--textarea-padding-bottom', description: 'Sets the bottom padding inside the textarea.', default: 'var(--spacing-s)' },
        { name: '--textarea-placeholder-color', description: 'Sets the color of the placeholder text.', default: 'var(--color-neutral-300)' },
        { name: '--textarea-width', description: 'Sets the width of the textarea.', default: '750px' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}