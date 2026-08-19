import { Component } from '@angular/core';
import { DAYTabComponent, DAYTabsComponent } from '@dayerlin-bustamante/tabs';
import { ToastExamplesComponent } from './components/toast-examples/toast-examples.component';
import { ToastOverviewComponent } from './components/toast-overview/toast-overview.component';

@Component({
    selector: 'toast-page',
    templateUrl: './toast.page.html',
    styleUrls: ['../../../shared/component-page/component-page.component.scss'],
    imports: [DAYTabsComponent, DAYTabComponent, ToastExamplesComponent, ToastOverviewComponent]
})
export class ToastPage { }