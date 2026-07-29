import { Component, signal, Signal } from "@angular/core";
import { MENU } from "../data/menu.data";
import { IMenuItem } from "../interfaces/menu-item.interface";

@Component({
    selector: 'sidemenu',
    templateUrl: './sidemenu.component.html',
    imports: []
})

export class SideMenuComponent {
    menuItems: Signal<IMenuItem[]> = signal(MENU).asReadonly()
}