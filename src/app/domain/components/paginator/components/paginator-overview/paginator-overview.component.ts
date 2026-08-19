import { Component, signal } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYPaginatorComponent, IDAYPaginatorChangeEvent } from '@dayerlin-bustamante/paginator';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'paginator-overview',
    templateUrl: './paginator-overview.component.html',
    styleUrls: ['./paginator-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYPaginatorComponent, DAYTableComponent, DAYTableColumnComponent, DAYTableCellTmplDirective]
})
export class PaginatorOverviewComponent {
    page = signal<number>(1);
    itemsPerPage = signal<number>(5);
    itemsPerPageOptions: { value: number }[] = [
        { value: 5 },
        { value: 10 },
        { value: 20 },
        { value: 50 }
    ];

    displayedColumns: string[] = ['name', 'description', 'default'];
    outputsDisplayedColumns: string[] = ['name', 'description'];
    adaptersDisplayedColumns: string[] = ['name', 'description', 'returns', 'param'];

    inputsData: IApiProperties[] = [
        { name: 'itemsPerPage: number', description: 'Required. Number of items to display per page.', default: '—' },
        { name: 'total: number', description: 'Required. Total number of items available for pagination.', default: '—' },
        { name: 'itemsPerPageOptions: { value: number }[]', description: 'Optional. Array of selectable options for the number of items per page.', default: '[]' },
        { name: 'maxPages: number', description: 'Optional. Maximum number of visible page buttons in the paginator.', default: '5' },
        { name: 'page: number', description: 'Optional. Current active page number.', default: '1' }
    ];

    outputsData: IApiProperties[] = [
        { name: 'paginationChanged: IDAYPaginatorChangeEvent', description: 'Event emitted when the page or items per page changes, including page number, items per page, and skip count.' }
    ];

    dataComputeds: IApiProperties[] = [
        { name: "copy()", description: "Computed string showing the current range of items being displayed." },
        { name: "firstDisabled()", description: "Computed boolean indicating if the 'first page' button is disabled." },
        { name: "lastDisabled()", description: "Computed boolean indicating if the 'last page' button is disabled." }
    ];

    adaptersData: { name: string; description: string; returns: string; param: string }[] = [
        { name: 'getPaginatorFirstAndLastCopies', description: 'Retrieves the copies for the first and last buttons of the paginator.', returns: 'An object containing the copies for the first and last buttons.', param: '' },
        { name: 'getPaginatorItemsCopy', description: 'Returns a string representing the range of items displayed.', returns: 'A formatted string showing the range and total items.', param: 'firstItem: number, lastItem: number, total: number' },
        { name: 'goToFirstPageOnPageChange', description: 'Indicates whether to go to the first page when the page changes.', returns: 'Boolean indicating if the paginator should reset to the first page on page change.', param: '' }
    ];

    changePagination(paginatorConfig: IDAYPaginatorChangeEvent) {
        this.itemsPerPage.set(paginatorConfig.itemsPerPage);
        this.page.set(paginatorConfig.page);
    }
}
