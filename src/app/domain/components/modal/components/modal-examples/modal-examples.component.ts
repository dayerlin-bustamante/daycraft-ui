import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYModalBodyComponent, DAYModalComponent, DAYModalFooterComponent, DAYModalHeaderComponent, DAYModalService, IDAYModalConfiguration } from '@dayerlin-bustamante/modal';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
    selector: 'modal-examples',
    templateUrl: './modal-examples.component.html',
    styleUrls: ['./modal-examples.component.scss'],
    imports: [DAYButtonComponent, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYModalComponent, DAYModalHeaderComponent, DAYModalBodyComponent, DAYModalFooterComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class ModalExamplesComponent {
    dayModalSmall = viewChild.required<DAYModalComponent>('dayModalSmall');
    dayModalMedium = viewChild.required<DAYModalComponent>('dayModalMedium');
    dayModalLarge = viewChild.required<DAYModalComponent>('dayModalLarge');
    modalService = inject(DAYModalService);

    private dialogRef?: DAYDialogRef;

    displayedColumns: string[] = ['name', 'description', 'default'];

    tables: { title: string; data: IApiProperties[] }[] = [
        {
            title: 'Modal container component',
            data: [
                { name: '--modal-border-radius', description: 'Border radius of the modal.', default: 'var(--radius-l)' },
                { name: '--modal-color-shadow', description: 'Color of the modal shadow.', default: 'var(--color-shadow-secondary)' },
                { name: '--modal-size-width', description: 'Size Width of the modal.', default: '800px' },
                { name: '--modal-width', description: 'Width of the modal.', default: '70%' },
                { name: '--modal-height', description: 'Height of the modal.', default: '70%' }
            ]
        },
        {
            title: 'Modal header component',
            data: [
                { name: '--modal-header-padding', description: 'Padding of the modal header.', default: 'var(--spacing-sm)' },
                { name: '--modal-header-bg', description: 'Background color of the modal header.', default: 'var(--color-bg-000)' }
            ]
        },
        {
            title: 'Modal body component',
            data: [
                { name: '--modal-body-padding', description: 'Padding of the modal body.', default: 'var(--spacing-xs) var(--spacing-sm)' }
            ]
        },
        {
            title: 'Modal footer component',
            data: [
                { name: '--modal-footer-padding', description: 'Padding of the modal footer.', default: 'var(--spacing-sm)' }
            ]
        }
    ];

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }

    showModalComponent() {
        const modalConfig: IDAYModalConfiguration = {
            size: "small",
            cssClasses: ['component-modal']
        };
        this.modalService.create(CustomModalComponent, modalConfig);
    }

    showModalSmallTmpl() {
        const modalConfig: IDAYModalConfiguration = {
            size: "small"
        };

        this.dialogRef = this.modalService.create(this.dayModalSmall(), modalConfig);
    }

    showModalMediumTmpl() {
        const modalConfig: IDAYModalConfiguration = {
            size: "medium"
        };

        this.dialogRef = this.modalService.create(this.dayModalMedium(), modalConfig);
    }

    showModalLargeTmpl() {
        const modalConfig: IDAYModalConfiguration = {
            size: "large"
        };

        this.dialogRef = this.modalService.create(this.dayModalLarge(), modalConfig);
    }

    closeModal() {
        this.dialogRef?.close();
    }
}