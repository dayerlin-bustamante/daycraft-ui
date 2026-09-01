import { Component, signal } from '@angular/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYPaginatorComponent, IPaginatorChangeEvent } from '@dayerlin-bustamante/paginator';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'paginator-examples',
    templateUrl: './paginator-examples.component.html',
    styleUrls: ['./paginator-examples.component.scss'],
    imports: [DAYPaginatorComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class PaginatorExamplesComponent {
    page = signal<number>(1);
    page2 = signal<number>(3);
    page3 = signal<number>(4);
    itemsPerPage = signal<number>(5);
    itemsPerPageOptions: { value: number }[] = [
        { value: 5 },
        { value: 10 },
        { value: 20 },
        { value: 50 }
    ];

    displayedColumns: string[] = ['name', 'description', 'default'];

    cssData: IApiProperties[] = [
        { name: '--paginator-padding', description: 'Padding inside the paginator container.', default: 'var(--spacing-m) var(--spacing-m) var(--spacing-sm)' },
        { name: '--paginator-background-color', description: 'Background color of the paginator.', default: 'var(--color-bg-000)' },
        { name: '--paginator-page-width', description: 'Width of each page button.', default: '32px' },
        { name: '--paginator-page-height', description: 'Height of each page button.', default: '32px' },
        { name: '--paginator-page-gap', description: 'Gap between page buttons.', default: 'var(--spacing-xxs)' },
        { name: '--paginator-page-background-color', description: 'Background color of each page button.', default: 'transparent' },
        { name: '--paginator-page-color', description: 'Text color of each page button.', default: 'var(--color-neutral-300)' },
        { name: '--paginator-pages-translate-x', description: 'Horizontal translation value for the pages container.', default: '0' },
        { name: '--paginator-pages-width', description: 'Total width of the pages container.', default: 'calc(var(--paginator-page-width) * 5 + var(--paginator-page-gap) * 4)' },
        { name: '--paginator-copy-font-size', description: 'Font size of the copy text.', default: 'var(--font-size-p-xs)' },
        { name: '--paginator-copy-color', description: 'Text color of the copy text.', default: 'var(--color-neutral-300)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }

    changePagination(paginatorConfig: IPaginatorChangeEvent, paginator: number) {
        this.itemsPerPage.set(paginatorConfig.itemsPerPage);
        if (paginator === 1) this.page.set(paginatorConfig.page);
        else if (paginator === 2) this.page2.set(paginatorConfig.page);
        else if (paginator === 3) this.page3.set(paginatorConfig.page);
    }
}
