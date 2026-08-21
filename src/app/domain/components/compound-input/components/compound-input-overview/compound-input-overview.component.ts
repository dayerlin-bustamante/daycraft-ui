import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYCompoundInputComponent } from '@dayerlin-bustamante/compound-input';
import { DAYDropdownComponent, DAYDropdownItemTmplDirective, DAYDropdownSelectionTmplDirective } from '@dayerlin-bustamante/dropdown';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYInputComponent } from '@dayerlin-bustamante/input';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';

@Component({
    selector: 'compound-input-overview',
    templateUrl: './compound-input-overview.component.html',
    styleUrls: ['./compound-input-overview.component.scss'],
    imports: [DAYDropdownSelectionTmplDirective, DAYDropdownItemTmplDirective, DAYCardComponent, DAYCardBodyComponent, DAYCompoundInputComponent, DAYLabelComponent, DAYDropdownComponent, DAYInputComponent, DAYTabsComponent, DAYTabComponent, DAYIconComponent, FormsModule]
})
export class CompoundInputOverviewComponent {
    dropdownOptions: { id: number; value: string; icon: string }[] = [
        { id: 1, value: '+1', icon: 'day-mail' },
        { id: 2, value: '+49', icon: 'day-edit' },
        { id: 3, value: '+33', icon: 'day-error' },
        { id: 4, value: '+39', icon: 'day-chat' },
        { id: 5, value: '+34', icon: 'day-circle-close' }
    ];

    inputValue = signal<any>(null);
    dropdownValue = signal<any>(null);
}