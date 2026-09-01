import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DAYCompoundInputComponent } from '@dayerlin-bustamante/compound-input';
import { DAYDropdownComponent, DAYDropdownItemTmplDirective, DAYDropdownSelectionTmplDirective } from '@dayerlin-bustamante/dropdown';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYInputComponent } from '@dayerlin-bustamante/input';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'compound-input-examples',
    templateUrl: './compound-input-examples.component.html',
    imports: [ReactiveFormsModule, DAYDropdownSelectionTmplDirective, DAYDropdownItemTmplDirective, DAYCompoundInputComponent, DAYLabelComponent, DAYDropdownComponent, DAYInputComponent, DAYIconComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class CompoundInputExamplesComponent implements OnInit {
    form = inject(FormBuilder);

    data: any[] = [
        { id: 1, value: '+1', icon: 'day-mail' },
        { id: 2, value: '+49', icon: 'day-edit' },
        { id: 3, value: '+33', icon: 'day-error' },
        { id: 4, value: '+39', icon: 'day-chat' },
        { id: 5, value: '+34', icon: 'day-circle-close' }
    ];

    formGroup: FormGroup = this.form.group({
        formControlError: new FormControl(null, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlDisabled: new FormControl({ value: null, disabled: true }),
    });

    dataToShow = signal<any[]>([]);

    ngOnInit() {
        this.dataToShow.set(this.data);
        this.formGroup.get('formControlError')!.markAsDirty();
    }

    search(value: string) {
        this.dataToShow.set([...this.data].filter((item: any) => item.value.toLowerCase().includes(value.toLowerCase())));
    }

    displayedColumns: string[] = ['name', 'description', 'default'];

    cssData: IApiProperties[] = [
        { name: '--compound-input-width', description: 'Width of the compound input.', default: '240px' },
        { name: '--compound-input-height', description: 'Height of the compound input.', default: '46px' },
        { name: '--compound-input-background-color', description: 'Background color of the compound input.', default: 'transparent' },
        { name: '--compound-input-color', description: 'Text color of the compound input.', default: 'var(--color-neutral-300)' },
        { name: '--compound-input-border-color', description: 'Border color of the compound input.', default: 'var(--color-neutral-200)' },
        { name: '--compound-input-border-radius', description: 'Border radius of the compound input.', default: 'var(--radius-s)' },
        { name: '--compound-input-border', description: 'Border of the compound input.', default: '1px solid var(--compound-input-border-color)' },
        { name: '--compound-input-padding', description: 'Padding of the compound input.', default: 'var(--spacing-s)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}