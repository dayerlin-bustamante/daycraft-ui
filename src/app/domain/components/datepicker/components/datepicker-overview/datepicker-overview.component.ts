import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DAYCardBodyComponent, DAYCardComponent } from '@dayerlin-bustamante/card';
import { DAYDatePickerComponent } from '@dayerlin-bustamante/datepicker';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'datepicker-overview',
    templateUrl: './datepicker-overview.component.html',
    styleUrls: ['./datepicker-overview.component.scss'],
    imports: [DAYDatePickerComponent, DAYCardComponent, DAYCardBodyComponent, DAYTabComponent, DAYTabsComponent, ReactiveFormsModule, DAYTableComponent, DAYTableColumnComponent]
})
export class DatepickerOverviewComponent {
    selectedDateText!: string;
    dateControl: FormControl = new FormControl(null, Validators.required);
    dateControl1: FormControl = new FormControl();

    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputsDatepicker: IApiProperties[] = [
        { name: "autoclose: boolean", description: "Automatically closes the calendar popup after a date or time is selected.", default: "required" },
        { name: "type: DAYCalendarDatepicker", description: "Specifies the type of picker: 'date', 'datetime', or 'time'.", default: "'date'" },
        { name: "rangeDate: boolean", description: "Enables or disables selection of a date range instead of a single date.", default: "false" },
        { name: "placeholder: string", description: "Text shown in the input field when no date is selected.", default: "—" },
        { name: "disabledDates: string[]", description: "Array of specific dates that should be disabled in the calendar.", default: "[]" },
        { name: "highlightDates: DAYCalendarHighlight", description: "Custom array of dates to be highlighted with a specific CSS class.", default: "[]" },
        { name: "iconOnly: boolean", description: "If true, the datepicker will only display an icon without an input field.", default: "false" }
    ];

    dataComputedsDatepicker: IApiProperties[] = [
        { name: "calendarConfig: computed<DAYCalendarConfiguration>", description: "Computed calendar configuration based on current picker settings like rangeDate, type, and size.", default: "—" },
        { name: "popoverConfig: computed<IDAYPopoverConfiguration>", description: "Computed popover configuration controlling behavior, position, CSS classes, and spacing.", default: "—" },
        { name: "startDate: computed<Temporal.PlainDate | Temporal.PlainDateTime | null>", description: "Computed start date from the selected date or range, returns null if none selected.", default: "null" },
        { name: "endDate: computed<Temporal.PlainDate | Temporal.PlainDateTime | null>", description: "Computed end date from the selected date range, or null if a single date or none is selected.", default: "null" }
    ];

    dataMethodsDatepicker: IApiProperties[] = [
        { name: "onDateSelected(value: DAYCalendarSelectedDates)", description: "Handles the selection of a date or date range, updates selectedDate, and optionally closes the picker if autoclose is true.", default: "—" },
        { name: "clearSelectedDates()", description: "Clears the current selected date or range and resets the date value.", default: "—" },
        { name: "submitSelectedDates()", description: "Submits the currently selected date or date range, updating the internal value and closing the picker if necessary.", default: "—" },
        { name: "setDisplayValue(value: string)", description: "Formats and parses the input string, validates it, and updates the date value or marks it as invalid.", default: "—" },
        { name: "openDatePicker()", description: "Opens the date picker popover if not disabled, sets focus and listens for closing event.", default: "—" },
        { name: "onKeyDown(event: KeyboardEvent)", description: "Handles keyboard input filtering, allowing only numeric and valid control keys, plus AM/PM letters if applicable.", default: "—" }
    ];

    dataMethodsDatepickerAdapter: IApiProperties[] = [
        { name: "getDateFormat()", description: "Returns the date format string used by the adapter (e.g., 'dd/MM/yyyy').", default: "—" },
        { name: "getTimeFormat()", description: "Returns the time format string depending on whether 12-hour or 24-hour format is selected.", default: "—" },
        { name: "getTimeHoursFormat()", description: "Specifies whether the adapter uses '12' or '24' hour format.", default: "'24'" },
        { name: "parseInputDate(value: DAYCalendarSelectedDatesNullable, type: DAYCalendarDatepicker, range: boolean): string", description: "Converts a date object or date range into a formatted string based on the type ('date', 'datetime', or 'time').", default: "—" },
        { name: "parseInputString(input: string, type: DAYCalendarDatepicker, range: boolean): DAYCalendarSelectedDatesNullable", description: "Parses a formatted string into a date or date range object, validating the structure and content.", default: "—" },
    ];

    dataOutputsDatepicker: IApiProperties[] = [
        { name: "calendarOpened", description: "Emitted when the calendar is opened.", default: "—" },
        { name: "beforeClose", description: "Emitted before the calendar is closed.", default: "—" },
        { name: "afterClose", description: "Emitted after the calendar is closed.", default: "—" }
    ];

    constructor() {
        this.dateControl.valueChanges.subscribe(value => {
            if (value && typeof value === 'object') this.selectedDateText = 'Start date: ' + value.start.toLocaleString() + ', End date: ' + (value.end ? value.end.toLocaleString() : 'not selected');
            else if (value) this.selectedDateText = 'Date: ' + value;
        });
    }
}