import { Component } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTooltipComponent, DAYTooltipTriggerDirective, IDAYTooltipConfiguration } from '@dayerlin-bustamante/tooltip';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tooltip-examples',
    templateUrl: './tooltip-examples.component.html',
    styleUrls: ['./tooltip-examples.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, DAYButtonComponent, DAYTooltipComponent, DAYTooltipTriggerDirective, DAYCardBodyComponent, DAYCardComponent, DAYIconComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class TooltipExamplesComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--tooltip-polygon-left', description: 'Horizontal position of the tooltip polygon.', default: '0px' },
        { name: '--tooltip-polygon-width', description: 'Width of the tooltip polygon.', default: 'var(--spacing-sl)' },
        { name: '--tooltip-polygon-height', description: 'Height of the tooltip polygon.', default: '14px' },
        { name: '--tooltip-background-color', description: 'Background color of the tooltip.', default: 'var(--color-secondary-200)' },
        { name: '--tooltip-polygon-background-color', description: 'Background color of the tooltip polygon.', default: 'var(--color-secondary)' },
        { name: '--tooltip-border-radius', description: 'Border radius of the tooltip.', default: '12px' },
        { name: '--tooltip-max-width', description: 'Maximum width of the tooltip.', default: '200px' },
        { name: '--tooltip-shadow-color', description: 'Shadow color of the tooltip.', default: 'rgba(79, 182, 194, 0.6)' },
        { name: '--tooltip-color', description: 'Text color of the tooltip.', default: 'var(--color-bg-000)' },
        { name: '--tooltip-font-size', description: 'Font size of the tooltip text.', default: 'var(--font-size-p-xxs)' }
    ];

    tooltipConfig: IDAYTooltipConfiguration = {
        verticalPosition: 'bottom',
        cssClasses: ['info']
    }

    tooltipConfigTitle: IDAYTooltipConfiguration = {
        verticalPosition: 'bottom',
        behavior: 'title',
    }

    tooltipString: string = '<h1>Tooltip content</h1><p>Tooltip content</p>';

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}