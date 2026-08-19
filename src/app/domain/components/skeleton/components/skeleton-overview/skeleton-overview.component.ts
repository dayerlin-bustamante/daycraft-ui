import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYSkeletonLoaderComponent } from '@dayerlin-bustamante/skeleton-loader';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'skeleton-overview',
    templateUrl: './skeleton-overview.component.html',
    styleUrls: ['./skeleton-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYSkeletonLoaderComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class SkeletonOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputs: IApiProperties[] = [
        { name: "type: DAYSkeletonLoaderTypes 'block' | 'table' | 'input' | 'checkbox' | 'radio' | 'cell';", description: "Defines the type of skeleton loader.", default: "block" },
        { name: "label: boolean", description: "If true, displays a label for the skeleton loader only the input type.", default: "'false'" },
        { name: "row: number", description: "Number of rows for the skeleton loader only the input table.", default: "5" },
        { name: "col: number", description: "Number of columns for the skeleton loader only the input table.", default: "3" }
    ];
}