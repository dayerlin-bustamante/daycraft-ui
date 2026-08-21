import { Component } from "@angular/core";
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { CalendarExamplesComponent } from "./components/calendar-examples/calendar-examples.component";
import { CalendarOverviewComponent } from "./components/calendar-overview/calendar-overview.component";

@Component({
    selector: 'calendar-page',
    templateUrl: './calendar.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, CalendarExamplesComponent, CalendarOverviewComponent]
})
export class CalendarPage { }