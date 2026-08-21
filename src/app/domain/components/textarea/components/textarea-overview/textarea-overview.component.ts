import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTextareaComponent } from '@dayerlin-bustamante/textarea';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'textarea-overview',
    templateUrl: './textarea-overview.component.html',
    styleUrls: ['./textarea-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYLabelComponent, DAYTextareaComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class TextareaOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: "autofocus: boolean", description: 'Determines if the textarea should be automatically focused', default: 'false' },
        { name: "id: <string | null>", description: 'The id attribute for the textarea element.', default: 'null' },
        { name: 'placeholder: string', description: 'The placeholder text for the textarea.', default: '' }
    ];
}