import { Component } from "@angular/core";
import { DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";

@Component({
    selector: 'info-page',
    templateUrl: './info.page.html',
    styleUrls: ['../../shared/page-style.scss'],
    imports: [DAYTableComponent, DAYTableColumnComponent],
    host: {
        '[class]': "'wrapper-container'"
    }
})
export class InfoPage {
    configColumns: string[] = ['provider', 'description'];
    configData = [
        { provider: 'DAY_POPOVER_CONFIGURATION', description: 'Configures popover behavior, position, gap, and backdrop settings.' },
        { provider: 'DAY_SLIDE_CONFIGURATION', description: 'Configures slide panel dimensions, resize, overlay, and backdrop settings.' },
        { provider: 'DAY_MODAL_CONFIGURATION', description: 'Configures modal size, CSS classes, data, and backdrop settings.' },
        { provider: 'DAY_TOAST_CONFIGURATION', description: 'Configures toast position, gap, auto-close, and timeout.' },
        { provider: 'DAY_TOOLTIP_CONFIGURATION', description: 'Configures tooltip behavior, position, gap, spacing, and delay.' }
    ];

    componentsColumns: string[] = ['package', 'selector', 'description'];
    componentsData = [
        { package: 'core', selector: 'day-close-button, day-resize', description: 'Core utilities, dialog system, resize component, and slot directive.' },
        { package: 'button', selector: 'day-button', description: 'Styled button with multiple types and sizes.' },
        { package: 'card', selector: 'day-card', description: 'Card layout with header, body, and footer sections.' },
        { package: 'icon', selector: 'day-icon', description: 'Icon component with registry and adapter pattern.' },
        { package: 'overlay', selector: 'day-overlay, day-backdrop', description: 'Overlay and backdrop for dialogs.' },
        { package: 'modal', selector: 'day-modal', description: 'Modal dialog with service-based creation.' },
        { package: 'popover', selector: 'day-popover', description: 'Popover with trigger directive and template support.' },
        { package: 'slide', selector: 'day-slide', description: 'Slide panel with resize and overlay options.' },
        { package: 'toast', selector: 'day-toast', description: 'Toast notifications with auto-close.' },
        { package: 'tooltip', selector: 'day-tooltip', description: 'Tooltip with delay and position control.' },
        { package: 'tabs', selector: 'day-tabs, day-tab', description: 'Tab navigation with toggle and tabular types.' },
        { package: 'table', selector: 'day-table', description: 'Data table with columns, ordering, grouping, and templates.' },
        { package: 'input', selector: 'day-input', description: 'Text input with ControlValueAccessor.' },
        { package: 'textarea', selector: 'day-textarea', description: 'Textarea with ControlValueAccessor.' },
        { package: 'checkbox', selector: 'day-checkbox', description: 'Checkbox and toggle with label position.' },
        { package: 'radio', selector: 'day-radio-group, day-radio-button', description: 'Radio button group with ControlValueAccessor.' },
        { package: 'toggle', selector: 'day-toggle', description: 'Toggle selection with custom templates.' },
        { package: 'label', selector: 'day-label', description: 'Form label with sizes.' },
        { package: 'dropdown', selector: 'day-dropdown', description: 'Dropdown select with search, groups, and templates.' },
        { package: 'autocomplete', selector: 'day-autocomplete', description: 'Autocomplete input with async filter.' },
        { package: 'datepicker', selector: 'day-datepicker', description: 'Date picker with range, disabled dates, and time.' },
        { package: 'calendar', selector: 'day-calendar', description: 'Calendar with date selection and highlighting.' },
        { package: 'avatar', selector: 'day-avatar', description: 'Avatar with color and size options.' },
        { package: 'compound-input', selector: 'day-compound-input', description: 'Compound input combining input and dropdown.' },
        { package: 'paginator', selector: 'day-paginator', description: 'Pagination with items per page and page navigation.' },
        { package: 'skeleton', selector: 'day-skeleton-loader', description: 'Skeleton loading states for various content types.' },
        { package: 'tree', selector: 'day-tree', description: 'Tree view with custom node templates.' }
    ];
}