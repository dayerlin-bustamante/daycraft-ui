
import { Component, computed, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DAYAutocompleteComponent, DAYAutocompleteItemTmplDirective, DAYAutocompleteLoaderTmplDirective, DAYAutocompleteNoItemsTmplDirective } from '@dayerlin-bustamante/autocomplete';

@Component({
    selector: 'autocomplete-examples',
    templateUrl: './autocomplete-examples.component.html',
    imports: [ReactiveFormsModule, DAYAutocompleteComponent, DAYAutocompleteItemTmplDirective, DAYAutocompleteLoaderTmplDirective, DAYAutocompleteNoItemsTmplDirective, FormsModule]
})
export class AutocompleteExamplesComponent {

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
            }, 300);// Un poco de retraso para simular carga asíncrona
        });
    };
}