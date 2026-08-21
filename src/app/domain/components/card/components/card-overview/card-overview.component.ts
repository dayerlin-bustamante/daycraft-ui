import { Component } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent, DAYCardFooterComponent, DAYCardHeaderComponent } from '@dayerlin-bustamante/card';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'card-overview',
    templateUrl: './card-overview.component.html',
    imports: [DAYButtonComponent, DAYCardComponent, DAYCardBodyComponent, DAYCardHeaderComponent, DAYCardFooterComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class CardOverviewComponent {
    displayedColumns: string[] = ['name', 'description'];

    data: IApiProperties[] = [
        { name: '<day-card-header>', description: 'Section anchored to the top of the card (adds padding).' },
        { name: '<day-card-body>', description: 'Body card content (adds padding).' },
        { name: '<day-card-footer>', description: 'Section anchored to the bottom of the card (adds padding).' }
    ];

    dataInputs: IApiProperties[] = [
        { name: "type: <'primary' | 'secondary'>", description: 'Type of the card.', default: 'primary' },
        { name: "shadow: <'big' | 'small' | 'none'>", description: "Size of the card's shadow.", default: 'big' }
    ];
}