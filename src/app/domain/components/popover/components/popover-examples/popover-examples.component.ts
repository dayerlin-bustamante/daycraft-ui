import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYPopoverBodyComponent, DAYPopoverComponent, DAYPopoverContentComponent, DAYPopoverFooterComponent, DAYPopoverHeaderComponent, DAYPopoverService, DAYPopoverTriggerDirective, IDAYPopoverConfiguration } from '@dayerlin-bustamante/popover';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';
import { CustomPopoverComponent } from '../custom-popover/custom-popover.component';

@Component({
    selector: 'popover-examples',
    templateUrl: './popover-examples.component.html',
    styleUrls: ['./popover-examples.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, DAYButtonComponent, DAYPopoverHeaderComponent, DAYPopoverComponent, DAYPopoverBodyComponent, DAYPopoverFooterComponent, DAYPopoverContentComponent, DAYPopoverTriggerDirective, DAYCardBodyComponent, DAYCardComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class PopoverExamplesComponent {
    dayPopover = viewChild.required<DAYPopoverComponent>('dayPopover');
    dayPopover2 = viewChild.required<DAYPopoverComponent>('dayPopover2');

    displayedColumns: string[] = ['name', 'description', 'default'];

    tables: { title: string; data: IApiProperties[] }[] = [
        {
            title: 'Popover component',
            data: [
                { name: '--popover-polygon-left', description: 'Horizontal position of the popover arrow (polygon).', default: '0px' },
                { name: '--popover-polygon-width', description: 'Width of the popover arrow (polygon).', default: '34px' },
                { name: '--popover-polygon-height', description: 'Height of the popover arrow (polygon).', default: '22px' },
                { name: '--popover-border-radius', description: 'Border radius of the popover container.', default: '8px' },
                { name: '--popover-width', description: 'Width of the popover container.', default: '260px' },
                { name: '--popover-shadow-color', description: 'Color used for the popover box shadow.', default: 'var(--color-shadow-secondary)' }
            ]
        },
        {
            title: 'Popover body component',
            data: [
                { name: '--popover-body-padding', description: 'Padding applied to the popover body content.', default: 'var(--spacing-xs) var(--spacing-sm)' },
                { name: '--max-height-popover-body', description: 'Maximum height of the popover body area.', default: '340px' },
                { name: '--popover-body-font-size', description: 'Font size used in the popover body.', default: 'var(--font-size-p-s)' }
            ]
        },
        {
            title: 'Popover footer component',
            data: [
                { name: '--popover-footer-padding', description: 'Padding applied to the popover footer area.', default: 'var(--spacing-xs) var(--spacing-xs)' }
            ]
        },
        {
            title: 'Popover header component',
            data: [
                { name: '--popover-header-border-radius', description: 'Border radius for the popover header or footer corners.', default: '8px 8px 0 0' },
                { name: '--popover-header-padding', description: 'Padding applied to the popover header area.', default: 'var(--spacing-xs) var(--spacing-sm)' }
            ]
        }
    ];

    popoverConfig: IDAYPopoverConfiguration = {
        behavior: 'inject',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        gap: 10,
        spacing: {
            top: 20,
            right: 24,
            bottom: 16,
            left: 12
        },
        cssClasses: ['first-popover', 'popover-class']
    };

    popoverConfigFill: IDAYPopoverConfiguration = {
        behavior: 'fill',
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    };

    popoverConfigDropdown: IDAYPopoverConfiguration = {
        behavior: 'dropdown',
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
    };

    private dialogRef1?: DAYDialogRef;
    private dialogRef2?: DAYDialogRef;

    readonly popoverService = inject(DAYPopoverService);

    showPopover(event: any) {
        const popoverConfig: IDAYPopoverConfiguration = {
            behavior: 'inject',
            horizontalPosition: 'right',
            cssClasses: ['first-popover', 'popover-class']
        };

        this.dialogRef1 = this.popoverService.create(this.dayPopover(), event.target, popoverConfig);

        this.dialogRef1?.beforeOpened().subscribe(() => {
            console.log('beforeOpened');
        });

        this.dialogRef1?.afterOpened().subscribe(() => {
            console.log('afterOpened');
        });

        this.dialogRef1?.beforeClosed().subscribe(() => {
            console.log('beforeClosed');
        });

        this.dialogRef1?.afterClosed().subscribe(() => {
            console.log('afterClosed');
        });
    }

    showPopover2(event: any) {
        const popoverConfig: IDAYPopoverConfiguration = {
            behavior: 'inject',
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            cssClasses: ['second-popover', 'popover-class']
        };

        this.dialogRef2 = this.popoverService.create(this.dayPopover2(), event.target, popoverConfig);
    }

    showPopoverComponent(event: any) {
        const popoverConfig: IDAYPopoverConfiguration = {
            customPosition: {
                top: 50,
                left: 100
            }
        }
        this.popoverService.create(CustomPopoverComponent, event.target, popoverConfig);
    }

    closePopover() {
        this.dialogRef1?.close();
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}
