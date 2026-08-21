import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { PaginatorExamplesComponent } from './components/paginator-examples/paginator-examples.component';
import { PaginatorOverviewComponent } from './components/paginator-overview/paginator-overview.component';

@Component({
    selector: 'paginator-page',
    templateUrl: './paginator.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, PaginatorOverviewComponent, PaginatorExamplesComponent]
})
export class PaginatorPage { }
