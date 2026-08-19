import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DropdownExamplesComponent } from './components/dropdown-examples/dropdown-examples.component';
import { DropdownOverviewComponent } from './components/dropdown-overview/dropdown-overview.component';

@Component({
    selector: 'dropdown-page',
    templateUrl: './dropdown.page.html',
    imports: [DAYTabComponent, DAYTabsComponent, DropdownOverviewComponent, DropdownExamplesComponent]
})
export class DropdownPage { }