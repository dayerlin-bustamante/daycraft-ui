import { Component, signal } from "@angular/core";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";

@Component({
    selector: 'custom-toast',
    templateUrl: './custom-toast.component.html',
    imports: [DAYIconComponent]
})
export class CustomToastComponent {
    icon = signal<string>('circle-check');
}