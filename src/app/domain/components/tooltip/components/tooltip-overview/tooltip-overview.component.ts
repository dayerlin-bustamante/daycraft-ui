import { Component } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTooltipTriggerDirective, ITooltipConfiguration } from '@dayerlin-bustamante/tooltip';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tooltip-overview',
    templateUrl: './tooltip-overview.component.html',
    styleUrls: ['./tooltip-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTableComponent, DAYTableColumnComponent, DAYTabComponent, DAYTabsComponent, DAYTooltipTriggerDirective, DAYButtonComponent]
})
export class TooltipOverviewComponent {
    displayedColumns: string[] = ['name', 'description'];

    dataInputsDirective: IApiProperties[] = [
        { name: "DAYTooltip: required<any>", description: 'Tooltip content.' },
        { name: "DAYTooltipConfig: IDAYTooltipConfiguration", description: 'Configuration for the tooltip.' },
        { name: "DAYTooltipBondedElement: <HTMLElement>", description: 'Element to which the tooltip is attached.' }
    ];

    tooltipString: string = '<h1>Tooltip</h1><p>Tooltip content</p>';

    tooltipConfig: ITooltipConfiguration = {
        verticalPosition: 'bottom',
        cssClasses: ['info']
    }
}