import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { DAYButtonComponent } from '@dayerlin-bustamante/button';
import { DAYCalendarComponent, DAYCalendarConfiguration, DAYCalendarSelectedDates } from '@dayerlin-bustamante/calendar';
import { DAYDialogRef } from '@dayerlin-bustamante/core';
import { DAYIconComponent } from '@dayerlin-bustamante/icon';
import { DAYModalBodyComponent, DAYModalComponent, DAYModalService, IModalConfiguration } from '@dayerlin-bustamante/modal';
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { DAYToastComponent, DAYToastTriggerDirective } from '@dayerlin-bustamante/toast';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'calendar-examples',
    templateUrl: './calendar-examples.component.html',
    imports: [DAYCalendarComponent, DAYModalBodyComponent, DAYModalComponent, DAYButtonComponent, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective]
})
export class CalendarExamplesComponent {
    modalService = inject(DAYModalService);
    dayModal = viewChild.required<DAYModalComponent>('dayModal');

    today: Temporal.PlainDate | null = null;
    startDate = '';
    nextDay = '';
    endDate = '';

    disabledDate: string[] = [this.startDate, this.nextDay];
    highlightDates = [
        { date: this.startDate, className: 'holiday' },
        { date: this.nextDay, className: 'important' }
    ];

    calendarConfigOne: DAYCalendarConfiguration = {
        rangeDate: false,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigTwo: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigThree: DAYCalendarConfiguration = {
        rangeDate: false,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigFour: DAYCalendarConfiguration = {
        rangeDate: false,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigViewOne: DAYCalendarConfiguration = {
        rangeDate: false,
        minView: 'days',
        maxView: 'days',
        size: 'medium'
    }

    calendarConfigViewTwo: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'months',
        maxView: 'months',
        size: 'medium'
    }

    calendarConfigViewThree: DAYCalendarConfiguration = {
        rangeDate: false,
        minView: 'years',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigViewFour: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'time',
        size: 'medium'
    }

    calendarConfigSmall: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'days',
        maxView: 'years',
        size: 'small'
    }

    calendarConfigMedium: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }

    calendarConfigLarge: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'years',
        size: 'large'
    }

    calendarConfigModal: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'years',
        size: 'large'
    }
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--calendar-size-width', description: 'Width of the calendar container.', default: '240px' },
        { name: '--calendar-size-height', description: 'Height of the calendar container.', default: '516px' },
        { name: '--calendar-border-radius', description: 'Border radius of the calendar container.', default: 'var(--radius-l)' }
    ];

    private dialogRef?: DAYDialogRef;
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

    showModal() {
        const modalConfig: IModalConfiguration = {
            size: "large"
        };

        this.dialogRef = this.modalService.create(this.dayModal(), modalConfig);
    }

    closeModal() {
        this.dialogRef?.close();
    }

    onDateSelectedCalendarOne(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarTwo(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarThree(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarFour(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarViewOne(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarViewTwo(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarViewThree(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarViewFour(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarSmall(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarMedium(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarLarge(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }

    onDateSelectedCalendarModal(event: DAYCalendarSelectedDates) {
        console.log('event desde el page ', event);
    }
}