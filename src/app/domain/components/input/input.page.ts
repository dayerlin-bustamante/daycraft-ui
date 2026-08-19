import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { InputExamplesComponent } from './components/input-examples/input-examples.component';
import { InputOverviewComponent } from './components/input-overview/input-overview.component';

@Component({
    selector: 'input-page',
    templateUrl: './input.page.html',
    imports: [DAYTabComponent, DAYTabsComponent, InputOverviewComponent, InputExamplesComponent]
})
export class InputPage { }