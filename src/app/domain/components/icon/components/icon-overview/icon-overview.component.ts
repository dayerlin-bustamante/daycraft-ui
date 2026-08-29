import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'icon-overview',
    templateUrl: './icon-overview.component.html',
    imports: [DAYIconComponent, DAYCardComponent, DAYCardBodyComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class IconOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: "scope: string", description: 'Name of the icon kit.', default: 'kit' },
        { name: "icon: string", description: 'Name of the icon.', default: '' },
        { name: "iconHover: string | null", description: 'Name to change icon hover state', default: 'null' },
    ];
}