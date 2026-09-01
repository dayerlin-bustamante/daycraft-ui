import { Component, OnDestroy } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYSkeletonLoaderComponent, DAYSkeletonLoaderDirective } from '@dayerlin-bustamante/skeleton';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'skeleton-examples',
    templateUrl: './skeleton-examples.component.html',
    styleUrls: ['./skeleton-examples.component.scss'],
    imports: [DAYSkeletonLoaderComponent, DAYSkeletonLoaderDirective, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYCardComponent, DAYCardBodyComponent, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class SkeletonExamplesComponent implements OnDestroy {
    isLoadingDirective: boolean = true;

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--skeleton-loader-width', description: 'Width of the skeleton loader container.', default: '100%' },
        { name: '--skeleton-loader-height', description: 'Height of the skeleton loader container.', default: '40px' },
        { name: '--skeleton-loader-background-color', description: 'Background color for the skeleton shimmer effect.', default: 'var(--color-bg-000)' },
        { name: '--skeleton-loader-border-radius', description: 'Border radius for all skeleton items.', default: 'var(--radius-xs)' },
        { name: '--skeleton-block-width', description: 'Width of the block skeleton item.', default: '100%' },
        { name: '--skeleton-block-height', description: 'Height of the block skeleton item.', default: '100%' },
        { name: '--skeleton-input-width', description: 'Width of the input skeleton item.', default: '100%' },
        { name: '--skeleton-input-height', description: 'Height of the input skeleton item.', default: '46px' },
        { name: '--skeleton-input-label-height', description: 'Height of the label in input skeleton.', default: '12px' },
        { name: '--skeleton-checkbox-width', description: 'Width of the checkbox skeleton item.', default: '100%' },
        { name: '--skeleton-checkbox-box-width', description: 'Width of the checkbox box.', default: '18px' },
        { name: '--skeleton-checkbox-box-height', description: 'Height of the checkbox box.', default: '18px' },
        { name: '--skeleton-checkbox-label-height', description: 'Height of the checkbox label.', default: '16px' },
        { name: '--skeleton-radio-width', description: 'Width of the radio skeleton item.', default: '100%' },
        { name: '--skeleton-radio-circle-width', description: 'Width of the radio circle.', default: '18px' },
        { name: '--skeleton-radio-circle-height', description: 'Height of the radio circle.', default: '18px' },
        { name: '--skeleton-radio-label-height', description: 'Height of the radio label.', default: '16px' },
        { name: '--skeleton-table-width', description: 'Width of the table skeleton item.', default: '100%' },
        { name: '--skeleton-table-height', description: 'Height of the table skeleton item.', default: '100%' },
        { name: '--skeleton-cell-width', description: 'Width of the cell skeleton item.', default: '100%' },
        { name: '--skeleton-cell-height', description: 'Height of the cell skeleton item.', default: '29px' },
        { name: '--skeleton-table-row-height', description: 'Height of each row in the table skeleton.', default: 'var(--spacing-sm)' },
        { name: '--skeleton-table-header-height', description: 'Height of the table header cells in the skeleton.', default: 'var(--spacing-m)' },
    ];

    private intervalTime = setInterval(() => {
        this.isLoadingDirective = !this.isLoadingDirective;
    }, 3000);

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }

    ngOnDestroy() {
        clearInterval(this.intervalTime);
    }
}