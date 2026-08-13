import { Component } from '@angular/core';
import { DAYCalendarComponent, DAYCalendarConfiguration, DAYCalendarSelectedDates } from '@dayerlin-bustamante/calendar';
import { DAYTableColumnComponent, DAYTableComponent } from '@dayerlin-bustamante/table';
import { IApiProperties } from '../../../../../core/interfaces/api-properties.interface';

@Component({
    selector: 'calendar-overview',
    templateUrl: './calendar-overview.component.html',
    imports: [DAYCalendarComponent, DAYTableComponent, DAYTableColumnComponent]
})
export class CalendarOverviewComponent {
    selectedDateText!: string;
    calendarConfig: DAYCalendarConfiguration = {
        rangeDate: true,
        minView: 'time',
        maxView: 'years',
        size: 'medium'
    }
    displayedColumns: string[] = ['name', 'description', 'default'];

    dataInputsCalendar: IApiProperties[] = [
        { name: "config: DAYCalendarConfiguration { rangeDate: boolean; minView: DAYCalendarView, maxView: DAYCalendarView, size: 'small' | 'medium' | 'large';}", description: "Calendar configuration object. Defines size, allowed views, range selection, etc.", default: "—" },
        { name: "currentView: DAYCalendarView = 'time' | 'days' | 'months' | 'years';", description: "Initial calendar view. Can be 'days', 'months', 'years', or 'time'.", default: "'days'" },
        { name: "disabledDates: string[]", description: "List of dates shown as disabled to prevent selection.", default: "[]" },
        { name: "highlightDates: { date: string; className: string }[]", description: "List of string dates with a custom class applied to visually highlight certain dates.", default: "[]" },
        { name: "date: DAYCalendarSelectedDatesNullable", description: "Previously selected date, or an object containing start and end dates.", default: "null" },
        { name: "currentView: DAYCalendarView", description: "Changes the default initial view.", default: "setView(view: DAYCalendarView) from body component" }
    ];

    dataInputsCalendarBody: IApiProperties[] = [
        { name: "disabledDates: string[]", description: "Dates displayed as disabled in the calendar to prevent selection.", default: "[]" },
        { name: "highlightDates: { date: string; className: string }[]", description: "Dates with custom styles applied via CSS classes.", default: "[]" },
        { name: "viewsRange: DAYCalendarView[]", description: "Allowed views within the calendar such as 'days', 'months', 'years', or 'time'.", default: "['days', 'months', 'years']" },
        { name: "rangeDate: boolean", description: "Defines if the date selection is by range (start and end).", default: "false" },
        { name: "currentView: DAYCalendarView", description: "Initial view.", default: "viewToRender()" },
        { name: "selectedDate: ICalendarData | null", description: "Previously selected date or currently selected date.", default: "null" }
    ];

    dataInputsCalendarHeader: IApiProperties[] = [
        { name: "selectedDate: ICalendarData | null", description: "Currently selected date, either a single date or a range.", default: "null" },
        { name: "hasTimeView: boolean", description: "Indicates if the time selection view is active.", default: "false" },
        { name: "size: 'small' | 'medium' | 'large'", description: "Visual size of the calendar header component.", default: "'medium'" }
    ];

    dataInputsCalendarMonthsDays: IApiProperties[] = [
        { name: "rangeDate: boolean", description: "Indicates if date selection is by range.", default: "required" },
        { name: "viewDate: Temporal.PlainDate", description: "Date used to generate the current month view.", default: "required" },
        { name: "startSelectedDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Selected start date (in range mode).", default: "undefined" },
        { name: "endSelectedDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Selected end date (in range mode).", default: "null" },
        { name: "weeks: Temporal.PlainDate[][]", description: "Matrix of weeks to render (each week is an array of 7 days).", default: "required" },
        { name: "weekDays: string[]", description: "List of weekday names according to culture.", default: "required" },
        { name: "disabledDates: string[]", description: "List of disabled dates to prevent selection.", default: "[]" },
        { name: "highlightDates: DAYCalendarHighlight", description: "Dates to be highlighted with a custom class.", default: "[]" }
    ];

    dataInputsCalendarMonths: IApiProperties[] = [
        { name: "months: string[]", description: "List of month names to display.", default: "[]" },
        { name: "selectedDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Currently selected date in the months view.", default: "null" },
        { name: "viewDate: Temporal.PlainDate", description: "Base date to define the year of the current view.", default: "required" }
    ];

    dataInputsCalendarYears: IApiProperties[] = [
        { name: "years: any", description: "List of years to display in the years view.", default: "[]" },
        { name: "selectedYear: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Currently selected year in the view.", default: "null" }
    ];

    dataInputsCalendarTime: IApiProperties[] = [
        { name: "rangeDate: boolean", description: "Indicates if date selection is by range.", default: "false" },
        { name: "startSelectedDate: Temporal.PlainDateTime | null", description: "Selected start date in the range.", default: "undefined" },
        { name: "endSelectedDate: Temporal.PlainDateTime | null", description: "Selected end date in the range.", default: "null" }
    ];

    dataOutputsCalendar: IApiProperties[] = [
        { name: "selectedEvent: DAYCalendarSelectedDates = { start: string; end: string } | string", description: "Event emitted when one or multiple dates are selected in the calendar.", default: "—" }
    ];

    dataOutputsCalendarBody: IApiProperties[] = [
        { name: "selectedEvent: DAYCalendarSelectedDates = { start: string; end: string } | string", description: "Event emitted when one or multiple dates are selected in the calendar.", default: "—" },
        { name: "viewChange: DAYCalendarView", description: "Emits the change of the current view from the body to the calendar.", default: "—" }
    ];

    dataOutputsCalendarHeader: IApiProperties[] = [
        { name: "addHours: void", description: "Event emitted when hours are added.", default: "—" }
    ];

    dataOutputsCalendarMonthsDays: IApiProperties[] = [
        { name: "dateSelected: ICalendarData", description: "Event emitted when a date or date range is selected from the month days view.", default: "—" },
        { name: "outSideMonth: Temporal.PlainDate", description: "The selected month out of the calendar to change the view to the selection.", default: "—" }
    ];

    dataOutputsCalendarMonths: IApiProperties[] = [
        { name: "monthSelected: number", description: "Event emitted when a month is selected.", default: "—" }
    ];

    dataOutputsCalendarYears: IApiProperties[] = [
        { name: "yearSelected: number", description: "Event emitted when a year is selected.", default: "—" }
    ];

    dataOutputsCalendarTime: IApiProperties[] = [
        { name: "timeSelected: { start: DAYCalendarTime, end: DAYCalendarTime } | DAYCalendarTime", description: "Event emitted when a time or time range is selected.", default: "—" }
    ];
    dataComputedsCalendar: IApiProperties[] = [
        { name: "viewsRange: DAYCalendarView[]", description: "Computed property that returns the allowed range of calendar views based on the config (minView to maxView).", default: "['time', 'days', 'months', 'years'] sliced by config" },
        { name: "initialView: DAYCalendarView", description: "Computed initial view of the calendar based on currentView input or defaults to 'days' if available in viewsRange.", default: "'days'" }
    ];

    dataComputedsCalendarBody: IApiProperties[] = [
        { name: "weekDays: string[]", description: "Localized names of the weekdays obtained from the adapter.", default: "['Mon', 'Tue', ...]" },
        { name: "weeks: Temporal.PlainDate[][]", description: "Weeks of the current month from viewDate, used to display days in the calendar view.", default: "array of weeks" },
        { name: "months: string[]", description: "List of month names generated by the adapter.", default: "['January', 'February', ...]" },
        { name: "years: string[]", description: "List of years generated by the adapter based on viewDate.", default: "12 visible years" },
        { name: "startSelectedDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Returns the start selected date, considering if it is a range or not.", default: "null or Temporal.PlainDate" },
        { name: "endSelectedDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Returns the end selected date (only if it is a range).", default: "null or Temporal.PlainDate" }
    ];

    dataComputedsCalendarHeader: IApiProperties[] = [
        { name: "startDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Returns the start date if selected. If it's a range, returns `start`. If a single date, returns it directly.", default: "null" },
        { name: "endDate: Temporal.PlainDate | Temporal.PlainDateTime | null", description: "Returns the end date if the selection is a range. Returns null if a single date or null.", default: "null" }
    ];

    dataComputedsMonthDays: IApiProperties[] = [
        { name: "isDisabledFn: (date: Temporal.PlainDate) => boolean", description: "Computed function that determines if a date is disabled.", default: "false" }
    ];

    dataMethodsCalendarAdapter: IApiProperties[] = [
        { name: "getWeekdayNames(): string[]", description: "Returns an array of abbreviated weekday names (e.g., ['Sun', 'Mon', ...]).", default: "['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" },
        { name: "getLongMonthsNames(): string[]", description: "Returns an array of long month names (e.g., ['January', 'February', ...]).", default: "['January', ..., 'December']" },
        { name: "getShortMonthsNames(): string[]", description: "Returns an array of short month names (e.g., ['Jan', 'Feb', ...]).", default: "['Jan', ..., 'Dec']" },
        { name: "getDateFormat(): string", description: "Returns the default date format string used for display.", default: "'MMM dd yyyy'" },
        { name: "getTimeFormat(): string", description: "Returns the time format string based on the hour format (12h or 24h).", default: "'HH:mm'" },
        { name: "getTimeHoursFormat(): '12' | '24'", description: "Returns whether the time format uses 12-hour or 24-hour system.", default: "'24'" },
        { name: "getFirstDayOfWeek(): number", description: "Returns the index of the first day of the week (0 = Sunday).", default: "0" },
        { name: "getSelectCopy(): string", description: "Returns the default label for selecting a date.", default: "'Select date'" },
        { name: "getAddHoursCopy(): string", description: "Returns the label for the 'Add hours' button.", default: "'Add hours'" },
        { name: "getFromToCopy(type: 'from' | 'to'): string", description: "Returns the label for 'From' or 'To' depending on the provided type.", default: "'From' | 'To'" },
        { name: "getStartEndCopy(type: 'start' | 'end'): string", description: "Returns the label for 'Start' or 'End' depending on the provided type.", default: "'Start' | 'End'" },
        { name: "getTitleTimeCopy(): string", description: "Returns the label used as the title for time input view.", default: "'Enter the time of the event'" },
        { name: "getStartEndTimeCopy(type: 'start' | 'end'): string", description: "Returns the label for the event's start or end time.", default: "'Event Start Time' | 'Event End Time'" },
        { name: "toTemporal(iso: string, hasTime: boolean): Temporal.PlainDate | Temporal.PlainDateTime", description: "Converts an ISO string to a Temporal.PlainDate or Temporal.PlainDateTime based on the presence of time.", default: "'Time format'" },
    ];

    dataMethodsCalendarHelper: IApiProperties[] = [
        { name: "getWeeksForMonth(date: Temporal.PlainDate): Temporal.PlainDate[][]", description: "Generates a 6-week grid (42 days) for the specified month, including days from previous and next months as needed to fill out the grid.", default: "—" },
        { name: "getYearNames(centerYear: number, before?: number, after?: number): number[]", description: "Generates an array of years centered around `centerYear`, with a configurable number of years before and after.", default: "before: 4, after: 7" },
        { name: "parseTime(value: string): [number, number]", description: "Parses a time string in 'HH:mm' format and returns the hours and minutes as a tuple.", default: "—" },
        { name: "formatTime(date: Temporal.PlainDate): string", description: "Formats a Date object into a 'HH:mm' string, zero-padded.", default: "—" },
        { name: "isValidTime(value: string, format?: '12' | '24'): boolean", description: "Checks whether a time string is valid according to the specified (or default) time format.", default: "format: calendarAdapter.getTimeHoursFormat()" },
        { name: "convertHourTo24(hours: number, format: 'AM' | 'PM'): number", description: "Converts a 12-hour format time (with AM/PM) into a 24-hour number.", default: "—" },
        { name: "convertHourTo12(hour: number): { hours12: string; format: 'AM' | 'PM' }", description: "Converts a 24-hour number into 12-hour format with AM/PM.", default: "—" },
        { name: "isSameDate(d1: Temporal.PlainDate | Temporal.PlainDateTime, d2: Temporal.PlainDate | Temporal.PlainDateTime): boolean", description: "Checks whether two Date objects represent the same calendar date (ignoring time).", default: "—" }
    ];

    dataMethodsCalendar: IApiProperties[] = [
        { name: "sendDate(date: DAYCalendarSelectedDates): void", description: "Sets the selected date and emits it through the selectedEvent output.", default: "—" }
    ];

    dataMethodsCalendarBody: IApiProperties[] = [
        { name: "sendDate(date: DAYCalendarSelectedDates): void", description: "Emits the selected date through the `selectedEvent` output.", default: "—" },
        { name: "onYearSelected(year: number): void", description: "Changes the year in `viewDate`. If 'months' is not in `viewsRange`, emits the date directly.", default: "—" },
        { name: "onMonthSelected(month: number): void", description: "Changes the month in `viewDate`. If 'days' is not in `viewsRange`, emits the date directly.", default: "—" },
        { name: "outSideMonth(day: Temporal.PlainDate)", description: "Set a viewDate", default: "—" },
        { name: "onDaySelected(dayDate: ICalendarData): void", description: "Assigns the selected date (single or range) and emits it.", default: "—" },
        { name: "onTimeSelected(time: DAYCalendarTime | { start: DAYCalendarTime; end: DAYCalendarTime }): void", description: "Adds time to the currently selected date or creates a new date with the specified time.", default: "—" },
        { name: "setCurrentView(view: DAYCalendarView): void", description: "Updates the current view if `view` is allowed in `viewsRange`.", default: "—" },
        { name: "goToPrevious(): void", description: "Navigates to the previous month, year, or block depending on the current view.", default: "—" },
        { name: "goToNext(): void", description: "Navigates to the next month, year, or block depending on the current view.", default: "—" }
    ];

    dataMethodsCalendarHeader: IApiProperties[] = [
        { name: "onAddHours(): void", description: "Method that triggers the `addHours` output.", default: "—" }
    ];

    dataMethodsMonthDays: IApiProperties[] = [
        { name: "onClickDate(day: Temporal.PlainDate): void", description: "Logic for selecting a simple or range date, and emits `dateSelected`.", default: "—" },
        { name: "getHighlightClass(date: Temporal.PlainDate): string", description: "Returns the CSS class if the date is in `highlightDates`.", default: "''" },
        { name: "isDisabled(date: Temporal.PlainDate): boolean", description: "Returns true if the date is disabled or should not be selected in a range.", default: "false" },
        { name: "isToday(day: Temporal.PlainDate): boolean", description: "Returns true if the date is today.", default: "false" },
        { name: "isSameDate(dayOne: Temporal.PlainDate | Temporal.PlainDateTime | null, dayTwo: Temporal.PlainDate | Temporal.PlainDateTime | null): boolean", description: "Returns true if both dates are the same (ignoring time).", default: "false" },
        { name: "isInRange(day: Temporal.PlainDate, start: Temporal.PlainDate | Temporal.PlainDateTime | null, end: Temporal.PlainDate | Temporal.PlainDateTime | null): boolean", description: "Returns true if the date is within the given range.", default: "false" }
    ];

    dataMethodsCalendarMonth: IApiProperties[] = [
        { name: "onClickDate(month: number): void", description: "Emits the selected month when clicked.", default: "—" }
    ];

    dataMethodsCalendarYears: IApiProperties[] = [
        { name: "onClickDate(year: number): void", description: "Emits the selected year when clicked.", default: "—" }
    ];

    dataMethodsTimeView: IApiProperties[] = [
        { name: "onStartTimeChange(value: string): void", description: "Handles changes in the start time input, formats the input, updates the signal, and emits the change if valid.", default: "—" },
        { name: "onEndTimeChange(value: string): void", description: "Handles changes in the end time input, formats the input, updates the signal, and emits the change if valid.", default: "—" },
        { name: "onKeyDown(event: KeyboardEvent): void", description: "Prevents invalid keys except numbers and navigation keys during time input.", default: "—" },
        { name: "timePattern(): string", description: "Returns the regex pattern to validate time input based on the current hour format (12h or 24h).", default: "—" }
    ];

    onDateSelectedCalendar(event: DAYCalendarSelectedDates) {
        if (typeof event === 'object' && 'start' in event) this.selectedDateText = 'Start date: ' + event.start + ', End date: ' + (event.end ? event.end : 'not selected');
        else this.selectedDateText = 'Date: ' + event;
    }
}