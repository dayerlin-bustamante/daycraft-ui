import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { PopoverExamplesComponent } from './components/popover-examples/popover-examples.component';
import { PopoverOverviewComponent } from './components/popover-overview/popover-overview.component';

@Component({
    selector: 'popover-page',
    templateUrl: './popover.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, PopoverOverviewComponent, PopoverExamplesComponent]
})
export class PopoverPage { }
