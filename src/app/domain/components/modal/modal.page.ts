import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { ModalExamplesComponent } from './components/modal-examples/modal-examples.component';
import { ModalOverviewComponent } from './components/modal-overview/modal-overview.component';

@Component({
    selector: 'modal-page',
    templateUrl: './modal.page.html',
    styleUrls: ['../../../shared/page-style.scss'],
    imports: [DAYTabComponent, DAYTabsComponent, ModalOverviewComponent, ModalExamplesComponent]
})
export class ModalPage { }