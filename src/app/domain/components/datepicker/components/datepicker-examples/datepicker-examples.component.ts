import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DAYDatePickerComponent } from '@dayerlin-bustamante/datepicker';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'datepicker-examples',
    templateUrl: './datepicker-examples.component.html',
    imports: [DAYDatePickerComponent, ReactiveFormsModule, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent]
})
export class DatepickerExamplesComponent {
    dateControl: FormControl = new FormControl();
    dateControl1: FormControl = new FormControl();
    dateControl2: FormControl = new FormControl();
    dateControl3: FormControl = new FormControl();
    dateControl4: FormControl = new FormControl();
    dateControl5: FormControl = new FormControl();
    dateControl6: FormControl = new FormControl(null, Validators.required);
    dateControl7: FormControl = new FormControl();
    dateControl8: FormControl = new FormControl();

    today: Temporal.PlainDate | null = null;
    startDate = '';
    nextDay = '';
    endDate = '';
    disabledDate: string[] = [this.startDate, this.nextDay];
    highlightDates = [
        { date: this.startDate, className: 'holiday' },
        { date: this.nextDay, className: 'important' }
    ];

    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--datepicker-width', description: 'Width of the datepicker.', default: '240px' },
        { name: '--datepicker-height', description: 'Height of the datepicker.', default: '46px' }
    ];

    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.today = Temporal.Now.plainDateISO();
            this.startDate = this.today.toString();
            this.nextDay = this.today.add({ days: 1 }).toString();
            this.endDate = this.today.add({ days: 4 }).toString();
            this.disabledDate = [this.startDate, this.nextDay];
            this.highlightDates = [{ date: this.startDate, className: 'holiday' }, { date: this.nextDay, className: 'important' }];
        }
    }

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}