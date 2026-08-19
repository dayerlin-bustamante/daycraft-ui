import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent, DAYTableFooterTmplDirective, DAYTableHeaderTmplDirective } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';
import { ITableDummyData } from '../../../../../core/interfaces/table/table-dummy-data.interface';

@Component({
    selector: 'table-overview',
    templateUrl: './table-overview.component.html',
    styleUrls: ['./table-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabsComponent, DAYTabComponent, DAYTableComponent, DAYTableHeaderTmplDirective, DAYTableCellTmplDirective, DAYTableFooterTmplDirective, DAYTableColumnComponent, DAYToastTriggerDirective, DAYToastComponent]
})
export class TableOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];
    displayedColumnsTwo: string[] = ['name', 'description'];

    dataInputs: IApiProperties[] = [
        { name: "data: any[]", description: "Array of data rows to display in the table.", default: "[]" },
        { name: "displayedColumns: string[]", description: "List of column names to display in the table.", default: "[]" },
        { name: "lockedColumns: string[]", description: "Columns that stay fixed (locked) when scrolling horizontally.", default: "[]" },
        { name: "orderedColumn: IDAYTableColumnOrder | null", description: "Initial column order configuration with column name and order direction.", default: "null" },
        { name: "groupedColumns: string[]", description: "Columns used for grouping rows.", default: "[]" },
        { name: "checkeableRows: boolean", description: "Enable checkbox selection for rows.", default: "false" },
        { name: "selectableRows: boolean", description: "Enable row selection (highlight on click).", default: "false" },
        { name: "orderableColumns: boolean", description: "Enable sorting on columns.", default: "false" },
        { name: "resizableColumns: boolean", description: "Allow resizing of columns by dragging.", default: "false" },
        { name: "isLoading: boolean", description: "Show skeleton loader on the cells.", default: "false" },
        { name: "rowsPerPage: number", description: "Number of rows to display per page.", default: "5" }
    ];

    dataInputsColumn: IApiProperties[] = [
        { name: 'name: string', description: 'Unique name identifier for the column.', default: '—' },
        { name: 'title?: string', description: 'Optional display title of the column header.', default: 'undefined' },
        { name: 'width?: number', description: 'Optional width in pixels for the column.', default: 'undefined' },
        { name: 'hasActions?: boolean', description: 'Flag to indicate if the column contains action buttons.', default: 'false' }
    ];

    dataOutputs: IApiProperties[] = [
        { name: 'rowCheckedEventEmitter<boolean[]>', description: 'Emits the array of selected row states (boolean[]) when row selection changes.', default: '—' },
        { name: 'rowSelectedEventEmitter<any>', description: 'Emits the selected row object when a row is clicked.', default: '—' },
        { name: 'columnOrderedEventEmitter<IDAYTableColumnOrder | null>', description: 'Emits the ordered column info with name and order (asc/desc) when a column is sorted.', default: '—' }
    ];

    dataDirectives: IApiProperties[] = [
        { name: 'DAYTableActionsTmplDirective', description: 'Template directive for customizing table actions.' },
        { name: 'DAYTableGroupActionsTmplDirective', description: 'Template directive for customizing group header actions.' },
        { name: 'DAYTableCellTmplDirective', description: 'Template directive for customizing table cells.' },
        { name: 'DAYTableFooterTmplDirective', description: 'Template directive for customizing the table footer.' },
        { name: 'DAYTableGroupTmplDirective', description: 'Template directive for customizing grouped rows in the table.' },
        { name: 'DAYTableHeaderTmplDirective', description: 'Template directive for customizing the table header.' },
        { name: 'DAYTableRowDetailsTmplDirective', description: 'Template directive for customizing detailed view in table rows.' },
        { name: 'DAYTableNoContentTmplDirective', description: 'Template directive for customizing the no content view when the table has no data.' }
    ];

    dataPublicMethods: IApiProperties[] = [
        { name: 'showDetails: (index: number) => void', description: 'Shows or hides additional details for a specific row.' }
    ];

    data2: ITableDummyData[] = [
        { name: 'Plane', code: 'A100', year: 2012, color: '#FF5733', brand: 'Boeing' },
        { name: 'Helicopter', code: 'B200', year: 2015, color: '#33FF57', brand: 'Airbus' },
        { name: 'Jet', code: 'C300', year: 2018, color: '#3357FF', brand: 'Lockheed Martin' },
        { name: 'Glider', code: 'D400', year: 2020, color: '#F1C40F', brand: 'Grob Aircraft' },
        { name: 'Drone', code: 'E500', year: 2021, color: '#9B59B6', brand: 'DJI' }
    ];
}
