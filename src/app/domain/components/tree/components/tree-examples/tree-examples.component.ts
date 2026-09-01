import { Component } from '@angular/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { DAYTreeComponent, DAYTreeItemTmplDirective } from '@dayerlin-bustamante/tree';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'tree-examples',
    templateUrl: './tree-examples.component.html',
    styleUrls: ['./tree-examples.component.scss'],
    imports: [DAYTreeComponent, DAYTreeItemTmplDirective, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class TreeExamplesComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--tree-indent-width', description: 'Controls the indentation width for tree nodes.', default: 'var(--spacing-ml)' },
        { name: '--tree-line-color', description: 'Sets the color of lines connecting tree nodes.', default: 'var(--color-secondary)' },
        { name: '--tree-text-color', description: 'Defines the default text color for tree nodes.', default: 'var(--color-primary)' },
        { name: '--tree-icon-color', description: 'Specifies the color for tree node icons.', default: 'var(--color-neutral-300)' },
        { name: '--tree-open-text-color', description: 'Text color for expanded/open tree nodes.', default: 'var(--color-secondary)' },
        { name: '--tree-open-icon-color', description: 'Icon color for expanded/open tree nodes.', default: 'var(--color-secondary)' },
        { name: '--tree-background-color', description: 'Background color for the tree component.', default: 'var(--color-secondary-100)' },
        { name: '--tree-padding', description: 'Padding applied to tree nodes.', default: 'var(--spacing-sm)' },
        { name: '--tree-background-line', description: 'Background color for tree lines.', default: 'var(--color-bg-000)' },
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
    treeData: { name: string; icon: string; children?: any[] }[] = [
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

    childItemsData: any[] = [
        {
            "documentid": 1,
            "name": "Documento Principal",
            "subdocumentos": [
                {
                    "subdocumentid": 1,
                    "parentid": 1,
                    "name": "prueba 1"
                },
                {
                    "subdocumentid": 2,
                    "parentid": 1,
                    "name": "prueba 2",
                    "subsubdocumentos": [
                        {
                            "subsubdocumentid": 1,
                            "parentid": 2,
                            "name": "sub prueba 1"
                        },
                        {
                            "subsubdocumentid": 2,
                            "parentid": 2,
                            "name": "sub prueba 2"
                        }
                    ]
                },
                {
                    "subdocumentid": 3,
                    "parentid": 1,
                    "name": "prueba 3"
                }
            ]
        }
    ];

    findItemChildren = (parentNode: any): any[] => {
        if (parentNode.subdocumentos) return parentNode.subdocumentos;
        if (parentNode.subsubdocumentos) return parentNode.subsubdocumentos;

        return [];
    }
}