import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IconExamplesComponent } from './components/icon-examples/icon-examples.component';
import { IconOverviewComponent } from './components/icon-overview/icon-overview.component';

@Component({
    selector: 'icon-page',
    templateUrl: './icon.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, IconOverviewComponent, IconExamplesComponent]
})
export class IconPage { }