import { Component, OnInit, signal } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDropdownComponent, DAYDropdownGroupTmplDirective, DAYDropdownHeaderTmplDirective, DAYDropdownItemTmplDirective, DAYDropdownSelectionTmplDirective } from '@dayerlin-bustamante/dropdown';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'dropdown-examples',
    templateUrl: './dropdown-examples.component.html',
    styleUrls: ['./dropdown-examples.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYDropdownComponent, DAYDropdownHeaderTmplDirective, DAYDropdownSelectionTmplDirective, DAYDropdownItemTmplDirective, DAYDropdownGroupTmplDirective, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class DropdownExamplesComponent implements OnInit {
    keyText: string = 'name';
    keyTextBig: string = 'value';

    data: any[] = [
        { name: 'Elephant', id: 1 },
        { name: 'Lion', id: 2 },
        { name: 'Tiger', id: 3 },
        { name: 'Bear', id: 4 },
        { name: 'Wolf', id: 5 },
        { name: 'Fox', id: 6 },
        { name: 'Dog', id: 7 },
        { name: 'Cat', id: 8 },
        { name: 'Turtle', id: 9 },
        { name: 'Dolphin', id: 10 }
    ];

    groupedData: any[] = [
        {
            id: 2,
            value: "Afganistán",
            children: [
                { id: 3, value: "Provincia de Kabul" },
                { id: 4, value: "Provincia de Herat" },
                { id: 5, value: "Provincia de Kandahar" }
            ]
        },
        {
            id: 6,
            value: "Albania",
            children: [
                { id: 7, value: "Condado de Tirana" },
                { id: 8, value: "Condado de Durrës" },
                { id: 9, value: "Condado de Vlorë" }
            ]
        },
        {
            id: 10,
            value: "Alemania",
            children: [
                { id: 11, value: "Baviera" },
                { id: 12, value: "Berlín" },
                { id: 13, value: "Renania del Norte-Westfalia" }
            ]
        }
    ];

    dataToShow = signal<any[]>([]);
    dataToShowBig = signal<any[]>([]);

    ngOnInit() {
        this.dataToShow.set(this.data);
        this.dataToShowBig.set(this.groupedData);
    }

    search(value: string) {
        this.dataToShow.set([...this.data].filter((item: any) => item[this.keyText].toLowerCase().includes(value.toLowerCase())));
    }

    searchBig(value: string) {
        this.dataToShowBig.set([...this.groupedData].filter((item: any) => item[this.keyTextBig].toLowerCase().includes(value.toLowerCase())));
    }

    groupedDataWithFn: any[] = [
        {
            groupName: 'Europa',
            nations: [
                { code: 'ESP', title: 'España' },
                { code: 'FRA', title: 'Francia' }
            ]
        },
        {
            groupName: 'Asia',
            countries: [
                { code: 'JPN', title: 'Japón' },
                { code: 'CHN', title: 'China' }
            ]
        }
    ];

    findDropdownChildren = (item: any): any[] => {
        if (item.nations) return item.nations;
        if (item.countries) return item.countries;
        return [];
    }

    displayedColumns: string[] = ['name', 'description', 'default'];

    cssData: IApiProperties[] = [
        { name: '--dropdown-width', description: 'Width of the dropdown.', default: 'Size medium: 480px.<br>Size small: 240px.' },
        { name: '--dropdown-height', description: 'Height of the dropdown.', default: 'Size medium: 48px.<br>Size small: 46px.' },
        { name: '--dropdown-border-radius', description: 'Border radius of the dropdown.', default: 'var(--radius-s)' },
        { name: '--dropdown-padding', description: 'Padding of the dropdown.', default: 'Size medium: var(--spacing-sm) var(--spacing-m).<br>Size small: var(--spacing-sm).' },
        { name: '--dropdown-border-color', description: 'Border color of the dropdown.', default: 'var(--color-neutral-200)' },
        { name: '--dropdown-color', description: 'Text color of the dropdown.', default: 'var(--color-primary-400)' },
        { name: '--dropdown-font-size', description: 'Font size of the dropdown.', default: 'var(--font-size-p-s)' },
        { name: '--dropdown-font-weight', description: 'Font weight of the dropdown.', default: '500' },
        { name: '--dropdown-background-color', description: 'Background color of the dropdown.', default: 'var(--color-bg-000)' },
        { name: '--dropdown-border', description: 'Border of the dropdown.', default: '1px solid var(--dropdown-border-color)' }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}