import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'icon-examples',
    templateUrl: './icon-examples.component.html',
    styleUrls: ['./icon-examples.component.scss'],
    imports: [DAYIconComponent, DAYTabComponent, DAYTabsComponent, DAYCardComponent, DAYCardBodyComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYToastComponent]
})
export class IconExamplesComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    tables: { title: string; data: IApiProperties[] }[] = [
        {
            title: 'Icon component',
            data: [
                { name: '--icon-color-disabled', description: 'Color of the icon when disabled.', default: 'var(--color-neutral-200)' }
            ]
        }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}