import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { TableExamplesComponent } from './components/table-examples/table-examples.component';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';

@Component({
    selector: 'table-page',
    templateUrl: './table.page.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, TableExamplesComponent, TableOverviewComponent]
})
export class TablePage { }
