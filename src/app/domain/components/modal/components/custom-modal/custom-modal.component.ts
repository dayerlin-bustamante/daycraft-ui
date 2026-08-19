import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCloseButtonComponent } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYInputComponent } from '@dayerlin-bustamante/input';
import { DAYLabelComponent } from '@dayerlin-bustamante/label';
import { DAYModalBodyComponent, DAYModalFooterComponent, DAYModalHeaderComponent } from '@dayerlin-bustamante/modal';
@Component({
    selector: 'custom-modal',
    templateUrl: './custom-modal.component.html',
    styleUrl: './custom-modal.component.scss',
    imports: [DAYModalHeaderComponent, DAYModalBodyComponent, DAYModalFooterComponent, DAYCloseButtonComponent, DAYIconComponent, DAYButtonComponent, DAYInputComponent, DAYLabelComponent, ReactiveFormsModule]
})
export class CustomModalComponent {
    title: string = 'Custom Modal';
    subTitle: string = 'This is a custom modal component';
    description: string = 'This is a custom modal component. You can customize it as per your requirements.'

    formGroup: FormGroup = new FormGroup({
        formControl: new FormControl(null, Validators.required),
        formControlValue: new FormControl({ value: 'Example value', disabled: false }, Validators.required),
        formControlDisabled: new FormControl({ value: null, disabled: true }, Validators.required)
    });
}