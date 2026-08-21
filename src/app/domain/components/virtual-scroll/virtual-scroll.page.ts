import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';

@Component({
    selector: 'virtual-scroll-page',
    imports: [DAYTabComponent, DAYTabsComponent],
    templateUrl: './virtual-scroll.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
})
export class VirtualScrollPage { }