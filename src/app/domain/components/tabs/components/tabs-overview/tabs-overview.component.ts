import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tabs-overview',
    templateUrl: './tabs-overview.component.html',
    styleUrls: ['./tabs-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYIconComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class TabsOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputsTabs: IApiProperties[] = [
        { name: "type: <'toggle' | 'tabular'>", description: 'Defines the visual style of the tabs. "toggle" renders them as switch-like buttons, while "tabular" displays them as traditional tab headers.', default: "'toggle'" }
    ];

    dataInputsTab: IApiProperties[] = [
        { name: "tabTmpl: TemplateRef<any> | null", description: "Custom template to render as the tab content.", default: "null" },
        { name: "link: string | null", description: "Optional router path. If provided, the tab behaves as a router link.", default: "null" },
        { name: "active: boolean", description: "Indicates whether the tab is initially active.", default: "false" },
        { name: "disabled: boolean", description: "Disables the tab, making it non-selectable and non-interactive.", default: "false" },
        { name: "isActive: linkedSignal<boolean>", description: "Links to the active state value from the input active().", default: "this.active()" }
    ];

    dataComputedEvents: IApiProperties[] = [
        { name: "active: DAYTabComponent | undefined", description: "Computed property that returns the currently active tab based on internal state.", default: "undefined" },
        { name: "setActiveLink(tab: DAYTabComponent)", description: "Sets the given tab as active and deactivates all others. Typically called from a tab instance.", default: "—" },
        { name: "isActive: linkedSignal<boolean>", description: "Linked signal that reflects the active state of the tab based on its 'active' input or router activity.", default: "this.active()" },
        { name: "setActiveLink()", description: "Method on DAYTabComponent that triggers its parent tabs component to activate it.", default: "—" }
    ];

    dataMethodsTabs: IApiProperties[] = [
        { name: "setActiveLink(tab: DAYTabComponent)", description: "Sets the specified tab as active and deactivates the others.", default: "—" }
    ];
}
