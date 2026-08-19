import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYSlideBodyComponent, DAYSlideComponent, DAYSlideFooterComponent, DAYSlideHeaderComponent, DAYSlideService, IDAYSlideConfiguration } from '@dayerlin-bustamante/slide';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'slide-overview',
    templateUrl: './slide-overview.component.html',
    styleUrls: ['./slide-overview.component.scss'],
    imports: [DAYButtonComponent, DAYCardComponent, DAYCardBodyComponent, DAYTableComponent, DAYTableColumnComponent, DAYTabComponent, DAYTabsComponent, DAYSlideComponent, DAYSlideHeaderComponent, DAYSlideBodyComponent, DAYSlideFooterComponent]
})
export class SlideOverviewComponent {
    daySlide = viewChild.required<DAYSlideComponent>('daySlide');

    private slideService = inject(DAYSlideService);
    private dialogRef?: DAYDialogRef;

    displayedColumns: string[] = ['name', 'description'];

    dataSelector: IApiProperties[] = [
        { name: '<day-slide>', description: 'Slide container component' },
        { name: '<day-slide-header>', description: 'Header section of the slide' },
        { name: '<day-slide-body>', description: 'Body section of the slide' },
        { name: '<day-slide-footer>', description: 'Footer section of the slide' }
    ];

    dataInputs: IApiProperties[] = [
        { name: 'Not included', description: '' }
    ];

    dataOutputs: IApiProperties[] = [
        { name: 'Not included', description: '' }
    ];

    dataDirectives: IApiProperties[] = [
        { name: 'Not included', description: '' }
    ];

    dataAdapters: { name: string; description: string; returns: string; param: string }[] = [
        { name: 'create', description: 'Creates and displays a slide dialog component.', returns: 'A DAYDialogRef instance representing the created dialog', param: 'component: The component to render; config: Optional configuration object' }
    ];

    showSlideTmpl() {
        const slideConfig: IDAYSlideConfiguration = {
            cssClasses: ['component-slide'],
            resize: false,
            overlay: false,
            defaultMinWidth: 300,
            defaultMaxWidth: 800,
            sidebarWidth: 400
        };

        this.dialogRef = this.slideService.create(this.daySlide(), slideConfig);
    }

    closeSlide() {
        this.dialogRef?.close();
    }
}