import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DAYCardBodyComponent, DAYCardComponent } from "@dayerlin-bustamante/card";
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYRadioButtonComponent, DAYRadioGroupComponent } from "@dayerlin-bustamante/radio";
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'radio-examples',
    templateUrl: './radio-examples.component.html',
    styleUrls: ['./radio-examples.component.scss'],
    imports: [DAYRadioButtonComponent, DAYLabelComponent, DAYRadioGroupComponent, ReactiveFormsModule, FormsModule, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class RadioExamplesComponent {
    selected: string = 'option2';
    selected2: string = 'option1';
    selected3: string = 'option1';
    selected4: string = 'option2';

    form: FormGroup = new FormGroup({
        choice: new FormControl('option2')
    });

    formError: FormGroup = new FormGroup({
        radioError: new FormControl('error1', () => ({ alwaysInvalid: true }))
    });

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--radio-width', description: 'Width of the radio button.', default: '18px' },
        { name: '--radio-height', description: 'Height of the radio button.', default: '18px' },
        { name: '--radio-circle-width', description: 'Width of the circle checked in radio button.', default: '10px' },
        { name: '--radio-circle-height', description: 'Height of the circle checked in radio button.', default: '10px' },
        { name: '--radio-border-color', description: 'Border color of the radio button.', default: 'var(--color-primary-500)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}
