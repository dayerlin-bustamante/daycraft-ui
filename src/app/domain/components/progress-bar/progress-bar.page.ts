import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';

@Component({
    selector: 'progress-bar-page',
    templateUrl: './progress-bar.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent],
})
export class ProgressBarPage { }