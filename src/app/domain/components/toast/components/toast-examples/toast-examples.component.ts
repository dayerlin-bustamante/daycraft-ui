import { Component, inject, viewChild } from "@angular/core";
import { DAYButtonComponent } from "@dayerlin-bustamante/button";
import { DAYCloseButtonComponent, DAYDialogRef } from "@dayerlin-bustamante/core";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYTableActionsTmplDirective, DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { DAYToastComponent, DAYToastService, DAYToastTriggerDirective, IToastConfiguration } from "@dayerlin-bustamante/toast";
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';
import { CustomToastComponent } from "../custom-toast/custom-toast.component";

@Component({
    selector: 'toast-examples',
    templateUrl: './toast-examples.component.html',
    styleUrls: ['./toast-examples.component.scss'],
    imports: [DAYButtonComponent, DAYToastComponent, DAYIconComponent, DAYToastTriggerDirective, DAYTableComponent, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYCloseButtonComponent]
})
export class ToastExamplesComponent {
    toastComponent = viewChild.required<DAYToastComponent>('dayToast');

    toastConfig: IToastConfiguration = {
        verticalPosition: 'bottom',
        cssClasses: ['toast-directive'],
        timeOut: 5000,
    };

    dialogRef?: DAYDialogRef;
    private readonly toastService = inject(DAYToastService);

    displayedColumns: string[] = ['name', 'description', 'default'];

    tables: { title: string; data: IApiProperties[] }[] = [
        {
            title: 'Toast component',
            data: [
                { name: '--toast-shadow-color', description: 'Shadow color applied to the toast component.', default: 'rgba(79, 182, 194, 0.6)' },
                { name: '--toast-border-radius', description: 'Border radius of the toast container.', default: '12px' },
                { name: '--toast-width', description: 'Width of the toast container.', default: '350px' },
                { name: '--toast-padding', description: 'Padding inside the toast container.', default: '8px 24px' },
                { name: '--toast-top', description: 'Distance from the top edge when positioned at the top.', default: 'var(--spacing-sl)' },
                { name: '--toast-bottom', description: 'Distance from the bottom edge when positioned at the bottom.', default: 'var(--spacing-sl)' }
            ]
        }
    ];

    showToast() {
        const toastConfig: IToastConfiguration = {
            verticalPosition: 'top',
            gap: 100
        };
        this.dialogRef = this.toastService.create(this.toastComponent(), toastConfig);
    }

    showToastComponent() {
        this.toastService.create(CustomToastComponent);
    }

    closeToast() {
        this.dialogRef?.close();
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}