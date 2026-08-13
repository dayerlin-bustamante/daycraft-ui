import { Component } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent, DAYCardFooterComponent, DAYCardHeaderComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'card-examples',
    templateUrl: './card-examples.component.html',
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYCardFooterComponent, DAYCardHeaderComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent, DAYButtonComponent]
})
export class CardExamplesComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    tables: { title: string; data: IApiProperties[] }[] = [
        {
            title: 'Card component',
            data: [
                { name: '--card-border-radius', description: 'Border radius of the card.', default: 'var(--radius-l)' },
                { name: '--card-background-color', description: 'Background color of the card.', default: 'var(--color-bg-000)' },
                { name: '--card-shadow-color', description: 'Shadow color of the card.', default: 'Type primary: var(--color-shadow-secondary).<br>Type secondary: rgba(30, 50, 65, 0.60).' }
            ]
        },
        {
            title: 'Card header component',
            data: [
                { name: '--card-header-padding', description: 'Padding of the card header.', default: 'var(--spacing-m) var(--spacing-sm) var(--spacing-xs)' }
            ]
        },
        {
            title: 'Card body component',
            data: [
                { name: '--card-body-padding', description: 'Padding of the card body.', default: 'var(--spacing-m) var(--spacing-sm)' }
            ]
        },
        {
            title: 'Card footer component',
            data: [
                { name: '--card-footer-padding', description: 'Padding of the card footer.', default: 'var(--spacing-xs) var(--spacing-sm) var(--spacing-m)' }
            ]
        }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}