import { Component } from "@angular/core";
import { DAYAvatarComponent } from "@dayerlin-bustamante/avatar";
import { DAYIconComponent } from "@dayerlin-bustamante/icon";
import { DAYTableColumnComponent, DAYTableComponent } from "@dayerlin-bustamante/table";
import { DAYToastComponent, DAYToastTriggerDirective } from "@dayerlin-bustamante/toast";
import { IApiProperties } from "../../../core/interfaces/api-properties.interface";

@Component({
    selector: 'avatar-page',
    templateUrl: './avatar.page.html',
    styleUrls: ['./../../../shared/page-style.scss'],
    imports: [DAYAvatarComponent, DAYTableComponent, DAYTableColumnComponent, DAYToastTriggerDirective, DAYIconComponent, DAYToastComponent],
    host: {
        '[class]': "'wrapper-container'"
    }
})
export class AvatarPage {
    displayedColumns: string[] = ['name', 'description', 'default'];

    data: IApiProperties[] = [
        { name: "color: string", description: 'Color of the avatar.', default: 'var(--color-bg-000)' },
        { name: "bgColor: string", description: 'Background color of the avatar.', default: 'var(--color-primary-400)' },
        { name: "size: 'small' | 'medium' | 'big'", description: 'Size of the avatar.', default: 'medium' }
    ];

    styleData: IApiProperties[] = [
        { name: '--avatar-font-size', description: 'Font size of the avatar.', default: '9px' }
    ]

    copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
            .catch(err => err);
    }
}