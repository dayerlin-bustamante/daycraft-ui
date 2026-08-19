import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';

@Component({
    selector: 'progress-bar-page',
    imports: [DAYTabComponent, DAYTabsComponent],
    templateUrl: './progress-bar.page.html',
    styleUrls: ['./progress-bar.page.scss', '../../../shared/component-page/component-page.component.scss']
})
export class ProgressBarPage { }