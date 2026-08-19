import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYLabelComponent } from "@dayerlin-bustamante/label";
import { DAYRadioButtonComponent, DAYRadioGroupComponent } from "@dayerlin-bustamante/radio";
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'radio-overview',
    templateUrl: './radio-overview.component.html',
    styleUrls: ['./radio-overview.component.scss'],
    imports: [DAYRadioButtonComponent, DAYRadioGroupComponent, FormsModule, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYLabelComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class RadioOverviewComponent {
    selected: string = 'option2';

    displayedColumns: string[] = ['name', 'description'];

    dataInputs: IApiProperties[] = [
        { name: "id: string | null", description: 'Value for input id and label for attribute.', default: 'null' },
        { name: "value: any", description: 'Radio button input value.', default: '' },
        { name: "labelPosition: <'before' | 'after'>", description: 'Label position: after or before the input.', default: 'after' },
        { name: "isDisabled: boolean", description: 'Indicates if the radio button input is disabled.', default: 'false' }
    ];

    dataComputedsEvent: { name: string; description: string; returns: string; param: string }[] = [
        { name: "checked(): boolean", description: 'Indicates if the group value matches the button value.', returns: 'false', param: '' },
        { name: "disabled(): boolean", description: 'Whether it is disabled globally or individually.', returns: 'false', param: '' },
        { name: "onRadioChange()", description: 'Method called on click. Changes the value in the group if it is not disabled.', returns: '', param: '' }
    ];
}
