import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tabs-examples',
    templateUrl: './tabs-examples.component.html',
    styleUrls: ['./tabs-examples.component.scss'],
    imports: [DAYIconComponent, RouterOutlet, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class TabsExamplesComponent {
    icon = signal<string>('day-chat');

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--tabs-align-items', description: 'Defines the vertical alignment of tabs inside the wrapper.', default: 'left' },
        { name: '--tabs-justify-content', description: 'Controls horizontal alignment of the tabs.', default: 'left' },
        { name: '--tabs-height', description: 'Height of the tab container.', default: '52px' },
        { name: '--tabs-gap', description: 'Spacing between individual tabs.', default: 'Responsive (varies by screen size)' },
        { name: '--tabs-background-color', description: 'Background color of the tab container.', default: 'Depends on type (toggle/tabular)' },
        { name: '--tabs-border-radius', description: 'Border radius of the tab container.', default: 'Depends on type (toggle: 999px, tabular: 0)' },
        { name: '--tabs-padding', description: 'Padding inside the tab container.', default: 'Depends on type (toggle: 6px, tabular: 0)' },
        { name: '--tab-background-color', description: 'Background color of an individual tab.', default: 'transparent' },
        { name: '--tab-shadow-color', description: 'Color used for the tab shadow.', default: 'rgba(79, 182, 194, 0.60)' },
        { name: '--tab-box-shadow', description: 'Shadow applied to the tab.', default: '0' },
        { name: '--tab-color', description: 'Text color of the tab.', default: 'var(--color-primary-300)' },
        { name: '--tab-border-bottom-color', description: 'Bottom border color for active tab (tabular style).', default: 'var(--color-secondary)' },
        { name: '--tab-padding', description: 'Padding of the tab element.', default: 'var(--spacing-xs) var(--spacing-s)' },
        { name: '--tab-font-weight', description: 'Font weight of the tab text.', default: '400/ 500 if active' },
        { name: '--tab-font-size', description: 'Font size of the tab text.', default: 'var(--font-size-p)' },
        { name: '--tab-min-width', description: 'Minimum width of a tab.', default: '120px' },
        { name: '--tab-max-width', description: 'Maximum width of a tab.', default: '172px' },
        { name: '--tab-height', description: 'Height of a tab.', default: '40px/ 34px in tabular' },
        { name: '--tab-underline-height', description: 'Height of the underline shown in tabular active tabs.', default: '8px' },
        { name: '--tab-border-radius', description: 'Border radius of the individual tab.', default: '999px (toggle), 8px (tabular)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}
