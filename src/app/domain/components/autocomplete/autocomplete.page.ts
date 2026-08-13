import { Component } from "@angular/core";
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { AutocompleteExamplesComponent } from "./components/autocomplete-examples/autocomplete-examples.component";
import { AutocompleteOverviewComponent } from "./components/autocomplete-overview/autocomplete-overview.component";

@Component({
    selector: 'autocomplete-page',
    templateUrl: './autocomplete.page.html',
    imports: [DAYTabsComponent, DAYTabComponent, AutocompleteOverviewComponent, AutocompleteExamplesComponent]
})
export class AutocompletePage { }