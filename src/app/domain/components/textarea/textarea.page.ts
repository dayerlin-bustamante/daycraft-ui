import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { TextareaExamplesComponent } from './components/textarea-examples/textarea-examples.component';
import { TextareaOverviewComponent } from './components/textarea-overview/textarea-overview.component';

@Component({
    selector: 'textarea-page',
    templateUrl: './textarea.page.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, TextareaOverviewComponent, TextareaExamplesComponent]
})
export class TextareaPage { }