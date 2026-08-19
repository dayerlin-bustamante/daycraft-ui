import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { SlideExamplesComponent } from './components/slide-examples/slide-examples.component';
import { SlideOverviewComponent } from './components/slide-overview/slide-overview.component';

@Component({
    selector: 'slide-page',
    templateUrl: './slide.page.html',
    imports: [DAYTabComponent, DAYTabsComponent, SlideOverviewComponent, SlideExamplesComponent]
})
export class SlidePage { }