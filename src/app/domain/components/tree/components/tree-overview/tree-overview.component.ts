import { Component } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTreeComponent, DAYTreeItemTmplDirective } from '@dayerlin-bustamante/tree';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tree-overview',
    templateUrl: './tree-overview.component.html',
    styleUrls: ['./tree-overview.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYTreeComponent, DAYIconComponent, DAYTreeItemTmplDirective, DAYTableComponent, DAYTableColumnComponent]
})
export class TreeOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputs: IApiProperties[] = [
        { name: "data: any[]", description: "The array of tree node data to render.", default: "—" },
        { name: "nameProperty: string", description: "The property name used to display the node label.", default: "'name'" },
        { name: "childProperty: string", description: "The property name containing child nodes.", default: "'children'" },
        { name: "childItems: (item: any) => any[]", description: "Optional function to retrieve child nodes for a given item.", default: "-" }
    ];

    dataOutputs: IApiProperties[] = [
        { name: "nodeSelected: any", description: "Emits when a tree node is selected.", default: "—" }
    ];

    dataDirectives: IApiProperties[] = [
        { name: "DAYTreeItemTmplDirective", description: "Optional custom template for rendering tree items.", default: "—" }
    ];

    data: { name: string; icon: string; children?: any[] }[] = [
        {
            name: 'Nivel 1 - Carpeta A',
            icon: 'day-assets-solid',
            children: [
                {
                    name: 'Nivel 2 - Carpeta A.1',
                    icon: 'day-assets-solid',
                    children: [
                        {
                            name: 'Nivel 3 - Carpeta A.1.1',
                            icon: 'day-assets-solid',
                            children: [
                                { name: 'Nivel 4 - Documento Final', icon: 'file' }
                            ]
                        }
                    ]
                },
                { name: 'Nivel 2 - Documento A.2', icon: 'file-pdf' }
            ]
        },
        {
            name: 'Nivel 1 - Carpeta B',
            icon: 'day-assets-solid',
            children: [
                { name: 'Nivel 2 - Documento B.1', icon: 'file-word' },
                { name: 'Nivel 2 - Documento B.2', icon: 'file-excel' },
            ]
        },
        {
            name: 'Nivel 1 - Carpeta C (vacía)',
            icon: 'day-assets-solid',
            children: []// carpeta vacia
        },
        {
            name: 'Nivel 1 - Documento suelto',
            icon: 'file-alt'
            // no tiene children
        }
    ];

    findItemChildren = (parentNode: any): any[] => {
        if (parentNode.subdocumentos) return parentNode.subdocumentos;
        if (parentNode.subsubdocumentos) return parentNode.subsubdocumentos;

        return [];
    }

    onNodeSelected(node: any) {
        console.log('Nodo seleccionado:', node);
    }
}