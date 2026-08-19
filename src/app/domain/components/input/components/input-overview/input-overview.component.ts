import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYInputComponent } from '@dayerlin-bustamante/input';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTooltipTriggerDirective, IDAYTooltipConfiguration } from '@dayerlin-bustamante/tooltip';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'input-overview',
    templateUrl: './input-overview.component.html',
    styleUrls: ['./input-overview.component.scss'],
    imports: [DAYLabelComponent, DAYTabComponent, DAYTabsComponent, DAYCardComponent, DAYCardBodyComponent, DAYInputComponent, ReactiveFormsModule, DAYIconComponent, DAYTooltipTriggerDirective, DAYTableComponent, DAYTableColumnComponent]
})
export class InputOverviewComponent {
    formGroup: FormGroup = new FormGroup({
        formControl: new FormControl(null, Validators.required),
        formControlValue: new FormControl({ value: 'Example value', disabled: false }, Validators.required),
        formControlDisabled: new FormControl({ value: null, disabled: true }, Validators.required)
    });

    tooltipConfig: IDAYTooltipConfiguration = {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        cssClasses: ['error']
    }

    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputs: IApiProperties[] = [
        { name: 'id: string | null', description: 'Value assigned to the input `id` and used for the associated label\'s `for` attribute.', default: 'null' },
        { name: 'type: "text" | "number" | "email" | "tel" | "password" | "url" | "hidden"', description: 'Defines the type of input to render.', default: '"text"' },
        { name: 'size: "big" | "medium"', description: 'Determines the visual size of the input field.', default: '"medium"' },
        { name: 'placeholder: string', description: 'Text shown inside the input when it is empty.', default: 'undefined' },
        { name: 'maxlength: number | null', description: 'Specifies the maximum number of characters allowed in the input.', default: 'null' },
        { name: 'autofocus: boolean', description: 'If true, the input will automatically gain focus on load.', default: 'false' },
        { name: 'autocomplete: "on" | "off"', description: 'Indicates whether the input should have autocomplete enabled.', default: '"off"' }
    ];

    dataComputedsEvent: IApiProperties[] = [
        { name: "onChange()", description: 'Method called on click. Changes the value if it is not disabled.', default: '' }
    ]
}