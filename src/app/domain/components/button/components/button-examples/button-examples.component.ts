import { Component } from "@angular/core";
import { DAYButtonComponent } from "@dayerlin-bustamante/button";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";

@Component({
    selector: 'button-examples',
    templateUrl: './button-examples.component.html',
    imports: [DAYButtonComponent, DAYIconComponent]
})
export class ButtonExamplesComponent { }