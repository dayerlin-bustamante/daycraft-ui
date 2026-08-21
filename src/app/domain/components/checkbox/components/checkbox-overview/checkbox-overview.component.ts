import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DAYCheckboxComponent } from "@dayerlin-bustamante/checkbox";
import { DAYLabelComponent } from "@dayerlin-bustamante/label";
import { DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { IApiProperties } from "../../../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'checkbox-overview',
    templateUrl: './checkbox-overview.component.html',
    styleUrls: ['./checkbox-overview.component.scss'],
    imports: [ReactiveFormsModule, FormsModule, DAYCheckboxComponent, DAYLabelComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class CheckboxOverviewComponent implements OnInit {
    indeterminate: boolean = true;
    toggleValue: boolean = true;

    form = inject(FormBuilder);

    formGroup: FormGroup = this.form.group({
        formControl: new FormControl(null),
        formControlIndeterminate: new FormControl(null),
        formControlDisabled: new FormControl({ value: null, disabled: true }),
    })

    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputsButton: IApiProperties[] = [
        { name: "id: string | null", description: 'Value for input id and label for attribute.', default: 'null' },
        { name: "value: any", description: 'Checkbox input value.', default: '' },
        { name: "labelPosition: <'before' | 'after'>", description: 'Label position: after or before the input.', default: 'before' },
        { name: "type: <'checkbox' | 'toggle'>", description: 'Type of the checkbox input.', default: 'checkbox' }
    ];

    dataComputedsEvent: IApiProperties[] = [
        { name: "onCheckboxChange()", description: 'Method called on click. Changes the value if it is not disabled.', default: '' }
    ]

    ngOnInit() {
        this.formGroup.get('formControlIndeterminate')!.valueChanges.subscribe(value => {
            if (value === true && this.indeterminate) this.indeterminate = false;
            else this.indeterminate = true;
        });
    }
}