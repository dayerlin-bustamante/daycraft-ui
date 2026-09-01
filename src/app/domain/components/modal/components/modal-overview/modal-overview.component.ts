import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCloseButtonComponent, DAYCloseDialogDirective, DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYModalBodyComponent, DAYModalComponent, DAYModalFooterComponent, DAYModalHeaderComponent, DAYModalService, IModalConfiguration } from '@dayerlin-bustamante/modal';

@Component({
    selector: 'modal-overview',
    templateUrl: './modal-overview.component.html',
    imports: [DAYButtonComponent, DAYModalComponent, DAYModalHeaderComponent, DAYModalBodyComponent, DAYModalFooterComponent, DAYCloseButtonComponent, DAYIconComponent, DAYCloseDialogDirective]
})
export class ModalOverviewComponent {
    dayModal = viewChild.required<DAYModalComponent>('dayModal');

    dialogRef?: DAYDialogRef;
    private modalService = inject(DAYModalService);

    showModalTmpl() {
        const modalConfig: IModalConfiguration = {
            size: "small",
            cssClasses: ['component-modal']
        };

        this.dialogRef = this.modalService.create(this.dayModal(), modalConfig);
    }

    closeModal() {
        this.dialogRef?.close();
    }
}