import { Component } from "@angular/core";
import { DAYButtonComponent } from "@dayerlin-bustamante/button";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYTableActionsTmplDirective, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { DAYToastComponent, DAYToastTriggerDirective } from "@dayerlin-bustamante/toast";
import { IApiProperties } from "../../../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'button-examples',
    templateUrl: './button-examples.component.html',
    imports: [DAYButtonComponent, DAYIconComponent, DAYTableComponent, DAYTableCellTmplDirective, DAYTableColumnComponent, DAYTableActionsTmplDirective, DAYToastComponent, DAYToastTriggerDirective]
})
export class ButtonExamplesComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: '--day-button-border-radius', description: 'Border radius of the button.', default: 'var(--day-radius-s)' },
        { name: '--day-button-transition', description: 'Transition when hovering the button.', default: 'background-color ease-out 200ms, border-color ease-out 200ms' },
        { name: '--day-button-padding', description: 'Padding of the button.', default: 'Size big and medium: var(--day-spacing-s) var(--day-spacing-m).<br>Size small: 6px var(--day-spacing-s).' },
        { name: '--day-button-min-width', description: 'Min-width of the button.', default: 'Size big: 220px.<br>Size medium: 160px.<br>Size small: 120px.' },
        { name: '--day-button-height', description: 'Height of the button.', default: 'Size big: 50px.<br>Size medium: 40px.<br>Size small: 32px.' },
        { name: '--day-button-font-size', description: 'Font size of the button copy.', default: 'Size big: var(--day-font-size-p).<br>Size medium: var(--day-font-size-p-s).<br>Size small: var(--day-font-size-p-xs).' },
        { name: '--day-button-font-weight', description: 'Font weight of the button copy.', default: 'Size big: 600.<br>Size medium: 400.<br>Size small: 500.' },
        { name: '--day-button-color', description: 'Color of the button copy.', default: 'Type primary, tertiary and action: var(--day-color-bg-000).<br>Type secondary, clear and neutral: var(--day-color-primary)' },
        { name: '--day-button-background-color', description: 'Background color of the button.', default: 'Type primary: var(--day-color-primary).<br>Type secondary, neutral and clear: transparent.<br>Type tertiary: var(--day-color-tertiary).<br>Type action: var(--day-color-secondary).' },
        { name: '--day-button-border-color', description: 'Color of the button border.', default: 'Type primary, tertiary, action and clear: transparent.<br>Type secondary: var(--day-color-secondary).<br>Type neutral: var(--day-color-turquoise-300).' },
        { name: '--day-button-border-size', description: 'Size of the button border.', default: 'Type primary, tertiary, action and clear: transparent.<br>Type secondary: 2px.' }
    ]

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}