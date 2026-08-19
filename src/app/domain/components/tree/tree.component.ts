import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { TreeExamplesComponent } from './components/tree-examples/tree-examples.component';
import { TreeOverviewComponent } from './components/tree-overview/tree-overview.component';

@Component({
    selector: 'tree-root',
    templateUrl: './tree.component.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [TreeOverviewComponent, TreeExamplesComponent, DAYTabComponent, DAYTabsComponent]
})
export class TreePage { }