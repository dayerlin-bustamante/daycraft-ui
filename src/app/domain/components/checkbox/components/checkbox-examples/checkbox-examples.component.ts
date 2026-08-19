import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DAYCheckboxComponent } from "@dayerlin-bustamante/checkbox";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYLabelComponent } from "@dayerlin-bustamante/label";
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { DAYToastComponent, DAYToastTriggerDirective } from "@dayerlin-bustamante/toast";
import { IApiProperties } from "../../../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'checkbox-examples',
    templateUrl: './checkbox-examples.component.html',
    styleUrls: ['./checkbox-examples.component.scss'],
    imports: [DAYCheckboxComponent, ReactiveFormsModule, FormsModule, DAYLabelComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class checkboxExamplesComponent implements OnInit {
    form = inject(FormBuilder);
    indeterminate: boolean = true;
    checkbox1: boolean = true;
    checkbox2: boolean = false;
    toggleDefault: boolean = false;
    toggleTrue: boolean = true;
    toggleFalse: boolean = false;

    formGroupDefault: FormGroup = this.form.group({
        formControl: new FormControl(null),
        formControlError: new FormControl(false, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlDisabled: new FormControl({ value: null, disabled: true }),
        formControl1: new FormControl(true),
        formControl2: new FormControl(false)
    });

    formGroupError: FormGroup = this.form.group({
        formControlError1: new FormControl(false, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlError2: new FormControl(true, { validators: [() => ({ alwaysInvalid: true })] })
    });

    formGroupIndeterminate: FormGroup = this.form.group({
        formControlIndeterminate: new FormControl(null),
        formControlDisabled: new FormControl({ value: null, disabled: true }),
    });

    formGroup: FormGroup = this.form.group({
        formControl: new FormControl(null),
        formControlError: new FormControl(false, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlDisabled: new FormControl({ value: null, disabled: true }),
    })

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--checkbox-width', description: 'Width of the checkbox input.', default: '18px' },
        { name: '--checkbox-height', description: 'Height of the checkbox input.', default: '18px' },
        { name: '--checkbox-border-color', description: 'Border color of the checkbox input.', default: 'var(--color-primary-500)' },
        { name: '--checkbox-icon-size', description: 'Size of the icon checked.', default: 'var(--font-size-p-s)' },
        { name: '--checkbox-icon-color', description: 'Color of the icon checked.', default: ' var(--color-bg-000)' },
        { name: '--checkbox-color', description: 'Background color of the checkbox input.', default: 'var(--color-secondary-500)' },
        { name: '--checkbox-toggle-left-background-color', description: 'Background color of the toggle item when is unchecked.', default: 'var(--color-primary-200)' },
        { name: '--checkbox-toggle-right-background-color', description: 'Background color of the toggle item when is checked.', default: 'var(--color-secondary)' },
        { name: '--checkbox-toggle-border-color', description: 'Border color of the toggle input.', default: 'var(--color-primary-200)' },
        { name: '--checkbox-toggle-background-color', description: 'Background color of the toggle input.', default: 'var(--color-secondary-100)' },
        { name: '--checkbox-toggle-item-width', description: 'Width of the item in the toggle item.', default: '25px' },
        { name: '--checkbox-toggle-item-height', description: 'Height of the item in the toggle item.', default: '25px' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }

    ngOnInit() {
        this.formGroupIndeterminate.get('formControlIndeterminate')!.valueChanges.subscribe(value => {
            if (value === true && this.indeterminate) this.indeterminate = false;
            else this.indeterminate = true;
        });
    }
}