import { Component } from "@angular/core";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    host: {
        '[class]': '"h-20 w-full fixed top-0 flex items-center justify-between bg-white border-b border-slate-300 px-4"'
    }
})
export class HeaderComponent { }