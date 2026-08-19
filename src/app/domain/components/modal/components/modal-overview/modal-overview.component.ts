import { Component, inject, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYCloseButtonComponent, DAYCloseDialogDirective, DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYModalBodyComponent, DAYModalComponent, DAYModalFooterComponent, DAYModalHeaderComponent, DAYModalService, IModalConfiguration } from '@dayerlin-bustamante/modal';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';

@Component({
    selector: 'modal-overview',
    templateUrl: './modal-overview.component.html',
    styleUrls: ['./modal-overview.component.scss'],
    imports: [DAYButtonComponent, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, DAYModalComponent, DAYModalHeaderComponent, DAYModalBodyComponent, DAYModalFooterComponent, DAYCloseButtonComponent, DAYIconComponent, DAYCloseDialogDirective]
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