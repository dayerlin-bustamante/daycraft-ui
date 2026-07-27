import { ISubmenuItem } from './submenu-item.interface';

export interface IMenuItem {
    id: number;
    name: string;
    submenus: ISubmenuItem[];
}