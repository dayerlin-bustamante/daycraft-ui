import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { RadioExamplesComponent } from './components/radio-examples/radio-examples.component';
import { RadioOverviewComponent } from './components/radio-overview/radio-overview.component';

@Component({
    selector: 'radio-page',
    templateUrl: './radio.page.html',
    imports: [RadioOverviewComponent, RadioExamplesComponent, DAYTabComponent, DAYTabsComponent]
})
export class RadioPage { }