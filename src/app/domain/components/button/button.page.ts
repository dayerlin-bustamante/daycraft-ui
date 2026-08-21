import { Component } from "@angular/core";
import { DAYTabComponent, DAYTabsComponent, } from "@dayerlin-bustamante/tabs";
import { ButtonExamplesComponent } from "./components/button-examples/button-examples.component";
import { ButtonOverviewComponent } from "./components/button-overview/button-overview.component";

@Component({
    selector: 'button-page',
    templateUrl: './button.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabsComponent, DAYTabComponent, ButtonOverviewComponent, ButtonExamplesComponent]
})
export class ButtonPage { }