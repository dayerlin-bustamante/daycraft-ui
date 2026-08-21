import { Component } from "@angular/core";
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { DatepickerExamplesComponent } from "./components/datepicker-examples/datepicker-examples.component";
import { DatepickerOverviewComponent } from "./components/datepicker-overview/datepicker-overview.component";

@Component({
    selector: 'datepicker-page',
    templateUrl: './datepicker.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, DatepickerExamplesComponent, DatepickerOverviewComponent]
})
export class DatepickerPage { }