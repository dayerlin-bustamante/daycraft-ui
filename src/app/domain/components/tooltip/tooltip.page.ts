import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { TooltipExamplesComponent } from './components/tooltip-examples/tooltip-examples.component';
import { TooltipOverviewComponent } from './components/tooltip-overview/tooltip-overview.component';

@Component({
    selector: 'tooltip-page',
    templateUrl: './tooltip.page.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, TooltipExamplesComponent, TooltipOverviewComponent]
})
export class TooltipPage { }