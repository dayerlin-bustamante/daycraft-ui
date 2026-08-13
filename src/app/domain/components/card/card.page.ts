import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';
import { CardOverviewComponent } from './components/card-overview/card-overview.component';

@Component({
    selector: 'card-page',
    templateUrl: './card.page.html',
    styleUrls: ['./card.page.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, CardExamplesComponent, CardOverviewComponent]
})
export class CardPage { }