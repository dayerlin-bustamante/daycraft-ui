import { Routes } from '@angular/router';
import { TestPage } from './pages/test-page/test.page';
import { Test2Page } from './pages/test2-page/test.2page';

export const TABS_ROUTES: Routes = [
    {
        path: 'test-page',
        component: TestPage
    },
    {
        path: 'test2-page',
        component: Test2Page
    }
];