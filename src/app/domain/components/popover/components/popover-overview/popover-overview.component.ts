import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYPopoverBodyComponent, DAYPopoverComponent, DAYPopoverContentComponent, DAYPopoverFooterComponent, DAYPopoverHeaderComponent, DAYPopoverService, IPopoverConfiguration } from '@dayerlin-bustamante/popover';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'popover-overview',
    templateUrl: './popover-overview.component.html',
    styleUrls: ['./popover-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYPopoverComponent, DAYPopoverContentComponent, DAYPopoverHeaderComponent, DAYPopoverFooterComponent, DAYPopoverBodyComponent, DAYButtonComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class PopoverOverviewComponent {
    dayPopover = viewChild.required<DAYPopoverComponent>('dayPopover');

    private dialogRef?: DAYDialogRef;
    private readonly popoverService = inject(DAYPopoverService);

    displayedColumns: string[] = ['name', 'description'];

    dataInputs: IApiProperties[] = [
        { name: "DAYPopover: IDAYDialogTmpl | any", description: "Template or component reference to be rendered inside the popover.", default: "—" },
        { name: "DAYPopoverConfig: IPopoverConfiguration", description: "Optional configuration object that controls behavior, positioning, spacing, customPosition, styling and receive data of the popover.", default: "{}" }
    ];

    dataComputedsEvent: IApiProperties[] = [
        { name: "onCheckboxChange()", description: 'Method called on click. Changes the value if it is not disabled.', default: '' }
    ];

    showPopover(event: any) {
        const popoverConfig: IPopoverConfiguration = {
            behavior: 'inject',
            horizontalPosition: 'right',
            verticalPosition: 'top',
            gap: 10,
            spacing: {
                top: 20,
                right: 24,
                bottom: 16,
                left: 12,
            },
            cssClasses: ['first-popover', 'popover-class']
        };

        this.dialogRef = this.popoverService.create(this.dayPopover(), event.target, popoverConfig);
    }
}
