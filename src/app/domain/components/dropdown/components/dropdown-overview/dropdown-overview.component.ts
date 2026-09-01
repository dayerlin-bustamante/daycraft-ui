import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DAYDropdownComponent } from '@dayerlin-bustamante/dropdown';
import { DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'dropdown-overview',
    templateUrl: './dropdown-overview.component.html',
    imports: [DAYDropdownComponent, ReactiveFormsModule, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent]
})
export class DropdownOverviewComponent {
    value: any = [];
    formGroup: FormGroup = new FormGroup({
        formControl: new FormControl({ value: this.value, disabled: false })
    });

    keyValue: string = 'id';
    keyText: string = 'name';

    data: any[] = [
        {
            name: 'Eggplant',
            id: 1
        },
        {
            name: 'Pumpkin',
            id: 2
        },
        {
            name: 'Onion',
            id: 3
        },
        {
            name: 'Lettuce',
            id: 4
        },
        {
            name: 'Tomato',
            id: 5
        },
        {
            name: 'Carrot',
            id: 6
        },
        {
            name: 'Cucumber',
            id: 7
        },
        {
            name: 'Pepper',
            id: 8
        },
        {
            name: 'Garlic',
            id: 9
        },
        {
            name: 'Zucchini',
            id: 10
        },
        {
            name: 'Broccoli',
            id: 11
        },
        {
            name: 'Coliflower',
            id: 12
        },
        {
            name: 'Spinach',
            id: 13
        },
        {
            name: 'Cabbage',
            id: 14
        },
        {
            name: 'Parsley',
            id: 15
        },
        {
            name: 'Celery',
            id: 16
        }
    ];

    inputsDisplayedColumns: string[] = ['name', 'description', 'default'];
    outputsDisplayedColumns: string[] = ['name', 'description'];
    directivesDisplayedColumns: string[] = ['name', 'description'];
    adaptersDisplayedColumns: string[] = ['name', 'description', 'returns', 'param'];

    inputsData: IApiProperties[] = [
        { name: "keyValue: string", description: 'Required string that defines the object key used to set the input value.', default: '' },
        { name: "data: any[]", description: 'Options shown in the dropdown.', default: '[]' },
        { name: 'keyText: string', description: 'Optional string that defines the object key used to display the text for each item.<br>It will only be used as a fallback if the DAYDropdownItemTmpl template does not exist.', default: "''" },
        { name: "type: <'select' | 'dropdown'>", description: 'Type of the dropdown.<br>Select: fill type popover.<br>Dropdown: dropdown type popover with transparent backdrop.', default: 'select' },
        { name: "size: <'medium' | 'small'>", description: 'Size of the dropdown.', default: 'medium' },
        { name: 'multiple: boolean', description: 'Whether multiple options can be selected.', default: 'false' },
        { name: 'showInputs: boolean', description: 'Whether to show inputs for radio-buttons or else.', default: 'true' },
        { name: 'autoclose: boolean', description: 'Whether the dropdown should close when an option is selected.', default: 'true' },
        { name: 'hasSearch: boolean', description: 'Whether the dropdown should have a search input.', default: 'true' },
        { name: 'placeholder: string', description: 'Placeholder text for the dropdown<br>It will only be used as a fallback if there is no value.', default: "''" },
        { name: 'isLoading: boolean', description: 'Whether the dropdown is in a loading state.', default: 'false' },
        { name: 'hasError: boolean', description: 'Whether the dropdown is in an error state.', default: 'false' },
        { name: 'isDisabledFn: (item: any) => boolean', description: 'Function to determine if an item is disabled.', default: '() => false' },
        { name: 'groupKeyText: string', description: 'The property name for group display text.', default: 'value' },
        { name: 'groupKeyValue: string', description: 'The property name for group children.', default: 'children' },
        { name: 'groupFn: (item: any) => any', description: 'Custom function to extract group children.', default: '' }
    ];
    outputsData: IApiProperties[] = [
        { name: "searchEvent: string", description: 'Event emitted when the search input value changes.' },
        { name: "openEvent: boolean", description: 'Event emitted when the dropdown is opened.' },
        { name: "closeEvent: boolean", description: 'Event emitted when the dropdown is closed.' }
    ];
    directivesData: IApiProperties[] = [
        { name: 'DAYDropdownItemTmpl', description: 'Template directive to customize the dropdown item.' },
        { name: 'DAYDropdownSelectionTmpl', description: 'Template directive to customize the dropdown selection.' },
        { name: 'DAYDropdownHeaderTmpl', description: 'Template directive to customize the dropdown header.' },
        { name: 'DAYDropdownFooterTmpl', description: 'Template directive to customize the dropdown footer.' },
        { name: 'DAYDropdownNoItemsTmpl', description: 'Template directive to customize the no items message.' },
        { name: 'DAYDropdownLoaderTmpl', description: 'Template directive to customize the loading state.' },
        { name: 'DAYDropdownErrorTmpl', description: 'Template directive to customize the error state.' },
        { name: 'DAYDropdownGroupTmpl', description: 'Template directive to customize the dropdown group.' }
    ];
    adaptersData: { name: string; description: string; returns: string; param: string }[] = [
        { name: 'getClearCopy', description: 'Gets the clear button copy text.', returns: 'The clear button copy text.', param: '' },
        { name: 'getSelectCopy', description: 'Gets the select button copy text.', returns: 'The select button copy text.', param: '' },
        { name: 'getNoItemsCopy', description: 'Gets the message for when there are no items available.', returns: "A string with the message 'No items'.", param: '' },
        { name: 'getMultipleItemsCopy', description: 'Returns a string indicating the number of items selected.', returns: 'A string indicating the number of items selected.', param: 'length: number; The number of items selected' },
        { name: 'getDefaultLoaderCopy', description: 'Gets the default loader copy text.', returns: 'A string representing the default loading message.', param: '' },
        { name: 'getSearchPlaceholderCopy', description: 'Gets the placeholder text for the search input.', returns: 'A string representing the search input placeholder.', param: '' }
    ];
}