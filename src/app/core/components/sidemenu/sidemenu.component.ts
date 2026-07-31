import { Component, signal, Signal } from "@angular/core";
import { MENU_COMPONENTS, MENU_ICONS } from "../../data/menu.data";
import { IMenuItem } from "../../interfaces/menu-item.interface";

@Component({
    selector: 'sidemenu',
    templateUrl: './sidemenu.component.html',
    imports: []
})

export class SideMenuComponent {
    menuItemsComponents: Signal<IMenuItem[]> = signal(MENU_COMPONENTS).asReadonly();
    menuItemsIcons: Signal<IMenuItem[]> = signal(MENU_ICONS).asReadonly();
    isOpen = signal<boolean>(true);
}