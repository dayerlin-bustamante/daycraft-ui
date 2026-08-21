import { Component } from "@angular/core";
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { checkboxExamplesComponent } from "./components/checkbox-examples/checkbox-examples.component";
import { CheckboxOverviewComponent } from "./components/checkbox-overview/checkbox-overview.component";

@Component({
    selector: 'checkbox-page',
    templateUrl: './checkbox.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabsComponent, DAYTabComponent, CheckboxOverviewComponent, checkboxExamplesComponent]
})
export class CheckboxPage { }