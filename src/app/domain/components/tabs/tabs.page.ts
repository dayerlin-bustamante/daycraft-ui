import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { TabsExamplesComponent } from './components/tabs-examples/tabs-examples.component';
import { TabsOverviewComponent } from './components/tabs-overview/tabs-overview.component';

@Component({
    selector: 'tabs-page',
    templateUrl: './tabs.page.html',
    imports: [DAYTabsComponent, DAYTabComponent, TabsExamplesComponent, TabsOverviewComponent]
})
export class TabsPage { }
