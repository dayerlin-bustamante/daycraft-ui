import { IMenuItem } from "../core/interfaces/menu-item.interface";
import { ISubmenuItem } from "../core/interfaces/submenu-item.interface";

export const DATA_SUBMENU: ISubmenuItem[] = [
    {
        id: 5,
        name: 'Calendar',
        url: '/data/calendar'
    },
    {
        id: 6,
        name: 'Chart',
        url: '/data/chart'
    },
    {
        id: 7,
        name: 'Diagram',
        url: '/data/diagram'
    },
    {
        id: 8,
        name: 'Gantt',
        url: '/data/gantt'
    },
    {
        id: 9,
        name: 'Heatmap',
        url: '/data/heatmap'
    },
    {
        id: 10,
        name: 'Spreadsheet',
        url: '/data/spreadsheet'
    },
    {
        id: 11,
        name: 'Table',
        url: '/data/table'
    },
    {
        id: 13,
        name: 'Tree',
        url: '/data/tree'
    },
    {
        id: 12,
        name: 'Treeview',
        url: '/data/treeview'
    }
];

export const INTERACTION_SUBMENU: ISubmenuItem[] = [
    {
        id: 23,
        name: 'Autocomplete',
        url: '/interaction/autocomplete'
    },
    {
        id: 13,
        name: 'Breadcrumb',
        url: '/interaction/breadcrumb'
    },
    {
        id: 14,
        name: 'Button',
        url: '/interaction/button'
    },
    {
        id: 15,
        name: 'File Uploader',
        url: '/interaction/file-uploader'
    },
    {
        id: 16,
        name: 'Checkbox',
        url: '/interaction/checkbox'
    },
    {
        id: 43,
        name: 'Compound Input',
        url: '/interaction/compound-input'
    },
    {
        id: 17,
        name: 'Input',
        url: '/interaction/input'
    },
    {
        id: 44,
        name: 'Datepicker',
        url: '/interaction/datepicker'
    },
    {
        id: 41,
        name: 'Dropdown',
        url: '/interaction/dropdown'
    },
    {
        id: 19,
        name: 'Paginator',
        url: '/interaction/paginator'
    },
    {
        id: 18,
        name: 'Radio button',
        url: '/interaction/radio'
    },
    {
        id: 20,
        name: 'Switch',
        url: '/interaction/switch'
    }, {
        id: 21,
        name: 'Textarea',
        url: '/interaction/textarea'
    },
    {
        id: 22,
        name: 'Toggle',
        url: '/interaction/toggle'
    }
];

export const LOGIC_SUBMENU: ISubmenuItem[] = [
    {
        id: 19,
        name: 'Culture',
        url: '/logic/culture'
    },
    {
        id: 20,
        name: 'Drag and drop',
        url: '/logic/drag-and-drop'
    },
    {
        id: 21,
        name: 'Form',
        url: '/logic/form'
    },
    {
        id: 22,
        name: 'Fullscreen',
        url: '/logic/fullscreen'
    },
    {
        id: 23,
        name: 'Mention',
        url: '/logic/mention'
    },
    {
        id: 24,
        name: 'Password strength',
        url: '/logic/password-strength'
    },
    {
        id: 25,
        name: 'Ripple',
        url: '/logic/ripple'
    },
    {
        id: 26,
        name: 'Virtual scroll (Unavailable)',
        url: '/logic/virtual-scroll'
    }
];

export const STRUCTURE_SUBMENU: ISubmenuItem[] = [
    {
        id: 46,
        name: 'Avatar',
        url: '/structure/avatar'
    },
    {
        id: 27,
        name: 'Badge',
        url: '/structure/badge'
    },
    {
        id: 28,
        name: 'Card',
        url: '/structure/card'
    },
    {
        id: 30,
        name: 'Comments',
        url: '/structure/comments'
    },
    {
        id: 31,
        name: 'Icon',
        url: '/structure/icon'
    },
    {
        id: 32,
        name: 'Info message',
        url: '/structure/info-message'
    },
    {
        id: 33,
        name: 'Modal',
        url: '/structure/modal'
    },
    {
        id: 34,
        name: 'Popover',
        url: '/structure/popover'
    },
    {
        id: 35,
        name: 'Profile picture',
        url: '/structure/profile-picture'
    },
    {
        id: 36,
        name: 'Progress bar',
        url: '/structure/progress-bar'
    },
    {
        id: 45,
        name: 'Skeleton',
        url: '/structure/skeleton'
    },
    {
        id: 42,
        name: 'Slide',
        url: '/structure/slide'
    },
    {
        id: 37,
        name: 'Stepper',
        url: '/structure/stepper'
    },
    {
        id: 38,
        name: 'Tabs',
        url: '/structure/tabs'
    },
    {
        id: 39,
        name: 'Tooltip',
        url: '/structure/tooltip'
    },
    {
        id: 40,
        name: 'Toast',
        url: '/structure/toast'
    }
];

export const MENU: IMenuItem[] = [
    {
        id: 1,
        name: 'Data',
        submenus: DATA_SUBMENU
    },
    {
        id: 2,
        name: 'Interaction',
        submenus: INTERACTION_SUBMENU
    },
    {
        id: 3,
        name: 'Logic',
        submenus: LOGIC_SUBMENU
    },
    {
        id: 4,
        name: 'Structure',
        submenus: STRUCTURE_SUBMENU
    }
];
