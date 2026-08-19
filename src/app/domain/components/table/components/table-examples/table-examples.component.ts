import { Component, computed, viewChild } from '@angular/core';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent, DAYTableFooterTmplDirective, DAYTableGroupActionsTmplDirective, DAYTableGroupTmplDirective, DAYTableHeaderTmplDirective, DAYTableRowDetailsTmplDirective } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';
import { ITableDummyData } from '../../../../../core/interfaces/table/table-dummy-data.interface';

@Component({
    selector: 'table-examples',
    templateUrl: './table-examples.component.html',
    styleUrls: ['./table-examples.component.scss'],
    imports: [DAYCardComponent, DAYCardBodyComponent, DAYTabsComponent, DAYTabComponent, DAYIconComponent, DAYTableGroupActionsTmplDirective, DAYTableComponent, DAYTableHeaderTmplDirective, DAYTableCellTmplDirective, DAYTableActionsTmplDirective, DAYTableFooterTmplDirective, DAYTableRowDetailsTmplDirective, DAYTableGroupTmplDirective, DAYTableColumnComponent, DAYToastTriggerDirective, DAYToastComponent]
})
export class TableExamplesComponent {
    dayTable = viewChild.required<DAYTableComponent>('dayTable');

    detailsIndexes = computed<number[]>(() => this.dayTable().rowDetails());

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: ITableDummyData[] = [
        { name: 'Car kasjdlas sdfj sdf sñdfsdñf ', code: 'A100', year: 2012, color: '#FF5733', brand: 'Toyota' },
        { name: 'Bike', code: 'B200', year: 2015, color: '#33FF57', brand: 'Honda' },
        { name: 'Bus', code: 'C300', year: 2018, color: '#3357FF', brand: 'Ford' },
        { name: 'Truck', code: 'D400', year: 2020, color: '#F1C40F', brand: 'Chevrolet' },
        { name: 'Van', code: 'E500', year: 2021, color: '#9B59B6', brand: 'Nissan' },
        { name: 'SUV', code: 'F600', year: 2019, color: '#2ECC71', brand: 'Hyundai' },
        { name: 'Convertible', code: 'G700', year: 2023, color: '#E74C3C', brand: 'Kia' },
        { name: 'Coupe', code: 'H800', year: 2022, color: '#3498DB', brand: 'Volkswagen' },
        { name: 'Wagon', code: 'I900', year: 2017, color: '#1ABC9C', brand: 'Subaru' },
        { name: 'Hatchback', code: 'J1000', year: 2016, color: '#8E44AD', brand: 'Mazda' },
        { name: 'Pickup', code: 'K1100', year: 2014, color: '#F39C12', brand: 'Ram' },
        { name: 'Limousine', code: 'L1200', year: 2013, color: '#D35400', brand: 'Chrysler' },
        { name: 'Minivan', code: 'M1300', year: 2011, color: '#2980B9', brand: 'Dodge' },
        { name: 'Crossover', code: 'N1400', year: 2010, color: '#2C3E50', brand: 'Buick' },
        { name: 'Sportscar', code: 'O1500', year: 2009, color: '#E67E22', brand: 'Porsche' },
        { name: 'Roadster', code: 'P1600', year: 2008, color: '#95A5A6', brand: 'Tesla' }
    ];

    data2: ITableDummyData[] = [
        { name: 'Plane', code: 'A100', year: 2012, color: '#FF5733', brand: 'Boeing' },
        { name: 'Helicopter', code: 'B200', year: 2015, color: '#33FF57', brand: 'Airbus' },
        { name: 'Jet', code: 'C300', year: 2018, color: '#3357FF', brand: 'Lockheed Martin' },
        { name: 'Glider', code: 'D400', year: 2020, color: '#F1C40F', brand: 'Grob Aircraft' },
        { name: 'Drone', code: 'E500', year: 2021, color: '#9B59B6', brand: 'DJI' }
    ];

    dataGrouped: ITableDummyData[] = [
        { name: 'Car kasjdlas sdfj sdf sñdfsdñf ', code: 'A100', year: 2012, color: '#FF5733', brand: 'Toyota', plate: '1234ABC' },
        { name: 'Bike', code: 'B200', year: 2015, color: '#33FF57', brand: 'Honda', plate: '1234ABC' },
        { name: 'Bike', code: 'C300', year: 2018, color: '#3357FF', brand: 'Ford', plate: '1234ABC' },
        { name: 'Bike', code: 'D400', year: 2018, color: '#F1C40F', brand: 'Chevrolet', plate: '1234JBC' },
        { name: 'Bike', code: 'E500', year: 2021, color: '#9B59B6', brand: 'Nissan', plate: '1234ABC' },
        { name: 'SUV', code: 'F600', year: 2019, color: '#2ECC71', brand: 'Hyundai', plate: '1234ABC' },
        { name: 'Convertible', code: 'G700', year: 2023, color: '#E74C3C', brand: 'Kia', plate: '1534ABC' },
        { name: 'Coupe', code: 'H800', year: 2022, color: '#3498DB', brand: 'Volkswagen', plate: '1034ABC' },
        { name: 'Wagon', code: 'I900', year: 2017, color: '#1ABC9C', brand: 'Subaru', plate: '1234LBC' },
        { name: 'Limousine', code: 'J1000', year: 2016, color: '#8E44AD', brand: 'Mazda', plate: '5234ABC' },
        { name: 'Limousine', code: 'K1100', year: 2016, color: '#F39C12', brand: 'Ram', plate: '1274ABC' },
        { name: 'Limousine', code: 'L1200', year: 2016, color: '#D35400', brand: 'Chrysler', plate: '1034ABC' },
        { name: 'Minivan', code: 'M1300', year: 2011, color: '#2980B9', brand: 'Dodge', plate: '1234ABK' },
        { name: 'Crossover', code: 'N1400', year: 2010, color: '#2C3E50', brand: 'Buick', plate: '1234ABC' },
        { name: 'Bus', code: 'O1500', year: 2009, color: '#95A5A6', brand: 'Porsche', plate: '1234ABC' },
        { name: 'Bus', code: 'O1500', year: 2009, color: '#95A5A6', brand: 'Tesla', plate: '1234ABC' },
        { name: 'Bus', code: 'O1500', year: 2009, color: '#95A5A6', brand: 'HJKHS', plate: '1234ABC' }
    ];

    displayedColumnsTable: string[] = ['name', 'code', 'year', 'color', 'brand'];
    lockedColumns: string[] = ['brand', 'name'];
    groupedColumns: string[] = ['plate', 'name', 'year'];

    cssProperties: { name: string; description: string; default: string }[] = [
        { name: '--table-scrollbar-margin-top', description: 'Top margin of the table scrollbar track.', default: '66px' },
        { name: '--table-scrollbar-margin-bottom', description: 'Bottom margin of the table scrollbar track.', default: '0' },
        { name: '--table-width', description: 'Width of the entire table container.', default: '100%' },
        { name: '--table-height', description: 'Height of the table wrapper container.', default: 'auto' },
        { name: '--table-column-min-width', description: 'Minimum width for each table column.', default: '120px' },
        { name: '--table-column-max-width', description: 'Maximum width for each table column.', default: '300px' },
        { name: '--table-cell-padding', description: 'Padding inside each table cell.', default: 'var(--spacing-s)' },
        { name: '--table-grouped-first-cell-padding', description: 'Padding of the first cell in grouped rows.', default: 'var(--spacing-l)' },
        { name: '--table-grouped-padding', description: 'Padding for grouped row containers.', default: 'var(--spacing-xs)' },
        { name: '--table-grouped-cell-padding', description: 'Padding for cells inside grouped rows.', default: 'var(--spacing-sm)' }
    ];

    showDetails(index: number) {
        this.dayTable().showDetails(index);
    }

    editGroup(key: string, value: any, items: any, parentValues: any) {
        console.log(key, value);
        console.log(items);
        console.log(parentValues);
    }

    edit(row: any) {
        console.log('edit', row);
    }

    comment(row: any) {
        console.log('comment', row);
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}
