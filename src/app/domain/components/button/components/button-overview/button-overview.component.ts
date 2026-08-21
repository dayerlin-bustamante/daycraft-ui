import { Component } from "@angular/core";
import { DAYButtonComponent } from "@dayerlin-bustamante/button";
import { DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { IApiProperties } from "../../../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'button-overview',
    templateUrl: './button-overview.component.html',
    imports: [DAYButtonComponent, DAYTableColumnComponent, DAYTableComponent]
})
export class ButtonOverviewComponent {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: "size: <'big' | 'medium' | 'small'>", description: 'Size of the button.', default: 'medium' },
        { name: "type: <'primary' | 'secondary' | 'tertiary' | 'action' | 'clear' | 'neutral'>", description: 'Type of the button.', default: 'primary' },
        { name: "buttonType: <'button' | 'submit' | 'reset'>", description: 'HTML button type.', default: 'button' },
        { name: 'disabled: boolean', description: 'Whether the button is disabled.', default: 'false' }
    ];
}