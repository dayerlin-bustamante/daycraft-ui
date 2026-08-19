import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { ToggleExamplesComponent } from './components/toggle-examples/toggle-examples.component';
import { ToggleOverviewComponent } from './components/toggle-overview/toggle-overview.component';

@Component({
    selector: 'toggle-page',
    templateUrl: './toggle.page.html',
    imports: [DAYTabComponent, DAYTabsComponent, ToggleOverviewComponent, ToggleExamplesComponent]
})
export class TogglePage { }