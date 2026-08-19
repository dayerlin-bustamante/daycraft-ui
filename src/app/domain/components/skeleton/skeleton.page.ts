import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { SkeletonExamplesComponent } from './components/skeleton-examples/skeleton-examples.component';
import { SkeletonOverviewComponent } from './components/skeleton-overview/skeleton-overview.component';

@Component({
    selector: 'skeleton-page',
    templateUrl: './skeleton.page.html',
    imports: [DAYTabComponent, DAYTabsComponent, SkeletonOverviewComponent, SkeletonExamplesComponent]
})
export class SkeletonPage { }