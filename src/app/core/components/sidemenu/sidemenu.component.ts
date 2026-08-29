import { Component, signal, Signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MENU_COMPONENTS, MENU_ICONS } from "../../data/menu.data";
import { IMenuItem } from "../../interfaces/menu-item.interface";

@Component({
    selector: 'sidemenu',
    templateUrl: './sidemenu.component.html',
    imports: [RouterModule]
})

export class SideMenuComponent {
    menuItemsComponents: Signal<IMenuItem[]> = signal(MENU_COMPONENTS).asReadonly();
    menuItemsIcons: Signal<IMenuItem[]> = signal(MENU_ICONS).asReadonly();
    isComponentsOpen = signal(false);
    isIconsOpen = signal(false);

    toggleComponents(): void {
        this.isComponentsOpen.update(v => !v);
    }

    toggleIcons(): void {
        this.isIconsOpen.update(v => !v);
    }
}