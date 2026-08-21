
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DAYAutocompleteComponent, DAYAutocompleteItemTmplDirective, DAYAutocompleteLoaderTmplDirective, DAYAutocompleteNoItemsTmplDirective } from '@dayerlin-bustamante/autocomplete';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'autocomplete-overview',
    templateUrl: './autocomplete-overview.component.html',
    imports: [DAYAutocompleteComponent, DAYAutocompleteItemTmplDirective, DAYAutocompleteLoaderTmplDirective, DAYAutocompleteNoItemsTmplDirective, FormsModule, DAYTableComponent, DAYTableColumnComponent]
})
export class AutocompleteOverviewComponent {

    availableColours: { code: string; name: string }[] = [
        { code: 'red', name: 'Rojo' },
        { code: 'blue', name: 'rojito' },
        { code: 'green', name: 'rojeta' },
        { code: 'yellow', name: 'rojin' },
        { code: 'purple', name: 'Morado' },
        { code: 'orange', name: 'Naranja' },
        { code: 'pink', name: 'Rosa' },
        { code: 'brown', name: 'Marrón' },
        { code: 'black', name: 'Negro' },
        { code: 'white', name: 'Blanco' }
    ];

    inputsDisplayedColumns: string[] = ['name', 'description', 'default'];
    directivesDisplayedColumns: string[] = ['name', 'description'];

    inputsData: IApiProperties[] = [
        { name: "data: any[]", description: 'The array of items to display in the dropdown.', default: '[]' },
        { name: "filterFn: fn", description: 'A required function to filter the data based on the search term. Should return a Promise of filtered items.', default: '' },
        { name: "minCharacters: number", description: 'Minimum number of characters required before triggering a search.', default: '3' },
        { name: 'keyText: string', description: 'The property name used to display the item text.', default: '' },
        { name: "keyValue: string", description: 'The property name used as the items value.', default: '' },
        { name: 'placeholder: string', description: 'Placeholder text for the input field.', default: '' },
        { name: 'loading: boolean', description: 'Boolean indicating if the component is in a loading state.', default: 'false' },
    ];

    directivesData: IApiProperties[] = [
        { name: 'DAYAutocompleteItemTmplDirective', description: 'Template directive to customize the autocomplete item.' },
        { name: 'DAYAutocompleteNoItemsTmplDirective', description: 'Template directive to customize the no items message.' },
        { name: 'DAYAutocompleteLoaderTmplDirective', description: 'Template directive to customize the loading state.' }
    ];

    selectedColourCodeSimple = signal<string | null>(null);
    selectedColourNameSimple = computed<string | null | undefined>(() => {
        const selectedCode = this.selectedColourCodeSimple();
        if (selectedCode) return this.availableColours.find(c => c.code === selectedCode)?.name;
        return null;
    });

    filterColoursSimple = (data: any[], searchTerm: string): Promise<any[]> => {
        return new Promise(resolve => {
            setTimeout(() => {
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                const filtered = data.filter(item =>
                    item.name.toLowerCase().includes(lowerCaseSearchTerm)
                );
                resolve(filtered);
            }, 300);
        });
    };
}