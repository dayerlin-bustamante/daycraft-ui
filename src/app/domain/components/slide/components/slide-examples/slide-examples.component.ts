import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYSlideBodyComponent, DAYSlideComponent, DAYSlideFooterComponent, DAYSlideHeaderComponent, DAYSlideService, ISlideConfiguration } from '@dayerlin-bustamante/slide';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'slide-examples',
    templateUrl: './slide-examples.component.html',
    styleUrls: ['./slide-examples.component.scss'],
    imports: [DAYButtonComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent, DAYSlideComponent, DAYSlideHeaderComponent, DAYSlideBodyComponent, DAYSlideFooterComponent]
})
export class SlideExamplesComponent {
    daySlideWithOverlay = viewChild.required<DAYSlideComponent>('daySlideWithOverlay');
    daySlideWithoutOverlay = viewChild.required<DAYSlideComponent>('daySlideWithoutOverlay');
    daySlideWithResize = viewChild.required<DAYSlideComponent>('daySlideWithResize');
    daySlideWithoutResize = viewChild.required<DAYSlideComponent>('daySlideWithoutResize');
    slideService = inject(DAYSlideService);

    private dialogRef?: DAYDialogRef;

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--slide-border-radius', description: 'Border radius of the slide.', default: 'var(--radius-l)' },
        { name: '--slide-color-shadow', description: 'Color of the slide shadow.', default: 'var(--color-shadow-secondary)' },
        { name: '--slide-background-color', description: 'Background color of the slide.', default: 'var(--color-bg-000)' },
    ];

    showSlideWithOverlayTmpl() {
        const slideConfig: ISlideConfiguration = {
            cssClasses: ['component-slide'],
            resize: false,
            overlay: true,
            defaultMinWidth: 300,
            defaultMaxWidth: 800,
            sidebarWidth: 400
        };

        this.dialogRef = this.slideService.create(this.daySlideWithOverlay(), slideConfig);
    }

    showSlideWithoutOverlayTmpl() {
        const slideConfig: ISlideConfiguration = {
            cssClasses: ['component-slide'],
            resize: false,
            overlay: false,
            defaultMinWidth: 300,
            defaultMaxWidth: 800,
            sidebarWidth: 400
        };

        this.dialogRef = this.slideService.create(this.daySlideWithoutOverlay(), slideConfig);
    }

    showSlideWithResizeTmpl() {
        const slideConfig: ISlideConfiguration = {
            cssClasses: ['component-slide'],
            resize: true,
            overlay: false,
            defaultMinWidth: 300,
            defaultMaxWidth: 800,
            sidebarWidth: 400
        };

        this.dialogRef = this.slideService.create(this.daySlideWithResize(), slideConfig);
    }

    showSlideWithoutResizeTmpl() {
        const slideConfig: ISlideConfiguration = {
            cssClasses: ['component-slide'],
            resize: false,
            overlay: true,
            defaultMinWidth: 300,
            defaultMaxWidth: 800,
            sidebarWidth: 400
        };

        this.dialogRef = this.slideService.create(this.daySlideWithoutResize(), slideConfig);
    }

    closeSlide() {
        this.dialogRef?.close();
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}