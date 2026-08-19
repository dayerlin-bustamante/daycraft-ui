import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { CompoundInputExamplesComponent } from './components/compound-input-examples/compound-input-examples.component';
import { CompoundInputOverviewComponent } from './components/compound-input-overview/compound-input-overview.component';

@Component({
    selector: 'compound-input-page',
    templateUrl: './compound-input.page.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, CompoundInputExamplesComponent, CompoundInputOverviewComponent]
})
export class CompoundInputPage {
    // This component serves as a container for the compound input feature.
    // It can be extended with additional logic or properties as needed.
}