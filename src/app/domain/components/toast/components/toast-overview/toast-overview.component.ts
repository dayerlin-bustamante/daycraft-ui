import { Component, inject, viewChild } from "@angular/core";
import { DAYButtonComponent } from "@dayerlin-bustamante/button";
import { DAYCardBodyComponent, DAYCardComponent } from "@dayerlin-bustamante/card";
import { DAYCloseButtonComponent, DAYCloseDialogDirective, DAYDialogRef } from "@dayerlin-bustamante/core";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYTabComponent, DAYTabsComponent } from "@dayerlin-bustamante/tabs";
import { DAYToastComponent, DAYToastService, IToastConfiguration } from "@dayerlin-bustamante/toast";
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'toast-overview',
    templateUrl: './toast-overview.component.html',
    styleUrls: ['./toast-overview.component.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, DAYCardComponent, DAYCardBodyComponent, DAYToastComponent, DAYButtonComponent, DAYIconComponent, DAYCloseButtonComponent, DAYTableComponent, DAYTableColumnComponent, DAYCloseDialogDirective]
})
export class ToastOverviewComponent {
    toastComponent = viewChild.required<DAYToastComponent>('dayToast');

    dialogRef?: DAYDialogRef;
    private readonly toastService = inject(DAYToastService);

    displayedColumnsTwo: string[] = ['name', 'description'];

    dataDirectives: IApiProperties[] = [
        { name: 'dayToastTrigger', description: 'Directive for easily triggering toasts from any element.' }
    ];

    showToast() {
        const toastConfig: IToastConfiguration = {
            verticalPosition: 'bottom',
            gap: 50
        };
        this.dialogRef = this.toastService.create(this.toastComponent(), toastConfig);
    }
}