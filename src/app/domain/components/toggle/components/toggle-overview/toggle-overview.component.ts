import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYToggleComponent } from '@dayerlin-bustamante/toggle';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'toggle-overview',
    templateUrl: './toggle-overview.component.html',
    styleUrls: ['./toggle-overview.component.scss'],
    imports: [DAYToggleComponent, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class ToggleOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];
    displayedColumnsNoDefault: string[] = ['name', 'description'];

    inputsData: IApiProperties[] = [
        { name: 'options: any[]', description: 'Array of options for the toggle.', default: '[]' }
    ];
    outputsData: IApiProperties[] = [
        { name: 'valueChangeEvent(): any', description: 'Event emitted when the toggle value changes.' }
    ];
    directivesData: IApiProperties[] = [
        { name: 'DAYToggleItemTmpl', description: 'Directive for toggle item template.' }
    ];
}