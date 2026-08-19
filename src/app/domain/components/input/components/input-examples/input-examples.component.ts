import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { DAYCardBodyComponent, DAYCardComponent } from "@dayerlin-bustamante/card";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYInputComponent } from "@dayerlin-bustamante/input";
import { DAYLabelComponent } from "@dayerlin-bustamante/label";
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { DAYTooltipTriggerDirective, IDAYTooltipConfiguration } from "@dayerlin-bustamante/tooltip";
import { DAYTableActionsTmplDirective, DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { DAYToastComponent, DAYToastTriggerDirective } from "@dayerlin-bustamante/toast";
import { IApiProperties } from "../../../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'input-examples',
    templateUrl: './input-examples.component.html',
    styleUrls: ['./input-examples.component.scss'],
    imports: [ReactiveFormsModule, FormsModule, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYInputComponent, DAYLabelComponent, DAYIconComponent, DAYTooltipTriggerDirective, DAYTableComponent, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class InputExamplesComponent implements OnInit {

    formGroupDefault: FormGroup = new FormGroup({
        formControlDefault: new FormControl(null),
        formControlError: new FormControl(null, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlError2: new FormControl(null, { validators: [() => ({ alwaysInvalid: true })] }),
        formControlDisabled: new FormControl({ value: null, disabled: true })
    });

    formGroup: FormGroup = new FormGroup({
        formControlText: new FormControl(null, Validators.required),
        formControlNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)]),
        formControlEmail: new FormControl(null, [Validators.required, Validators.email]),
        formControlPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/)]),
        formControlTel: new FormControl(null, [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]),
        formControlUrl: new FormControl(null, [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)])
    });

    formGroupSize: FormGroup = new FormGroup({
        formControlMedium: new FormControl(null, Validators.required),
        formControlBig: new FormControl(null, Validators.required)
    });

    formGroupIcons: FormGroup = new FormGroup({
        formControl: new FormControl(null, Validators.required)
    });

    tooltipConfig: IDAYTooltipConfiguration = {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        cssClasses: ['error']
    }

    ngOnInit() {
        this.formGroupDefault.get('formControlError')?.markAsDirty();
        this.formGroupDefault.get('formControlError2')?.markAsDirty();
    }

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--input-icon-width', description: 'Width of the icon inside the input.', default: 'var(--icon-size-m)' },
        { name: '--input-icon-height', description: 'Height of the icon inside the input.', default: 'var(--icon-size-m)' },
        { name: '--input-slot-spacing', description: 'Spacing between the slot content and the input text.', default: 'var(--spacing-xs)' },
        { name: '--input-background-color', description: 'Background color of the input.', default: 'transparent' },
        { name: '--input-color', description: 'Text color of the input.', default: 'var(--color-neutral-300)' },
        { name: '--input-slot-color', description: 'Color of the slot content (e.g., icons).', default: 'var(--color-neutral-300)' },
        { name: '--input-caret-color', description: 'Caret (text cursor) color.', default: 'var(--color-secondary)' },
        { name: '--input-placeholder-color', description: 'Color of the placeholder text.', default: 'var(--color-neutral-300)' },
        { name: '--input-border-color', description: 'Border color of the input.', default: 'var(--color-neutral-200)' },
        { name: '--input-width', description: 'Width of the input field.', default: '240px' },
        { name: '--input-height', description: 'Height of the input field.', default: '46px' },
        { name: '--input-padding-left', description: 'Left padding inside the input.', default: 'var(--spacing-sm)' },
        { name: '--input-padding-right', description: 'Right padding inside the input.', default: 'var(--spacing-s)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}