import { Component } from '@angular/core';
import { DAYPopoverBodyComponent, DAYPopoverContentComponent, DAYPopoverHeaderComponent } from '@dayerlin-bustamante/popover';

@Component({
    selector: 'custom-popover',
    templateUrl: './custom-popover.component.html',
    styleUrl: './custom-popover.component.scss',
    imports: [DAYPopoverContentComponent, DAYPopoverHeaderComponent, DAYPopoverBodyComponent]
})
export class CustomPopoverComponent {
    configurationItems: string[] = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
    ];

    adminItems: string[] = [
        'Admin 1',
        'Admin 2',
        'Admin 3',
        'Admin 4',
        'Admin 5',
        'Admin 6',
        'Admin 7'
    ]
}