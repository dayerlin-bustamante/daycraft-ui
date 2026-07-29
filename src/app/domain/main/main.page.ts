import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SideMenuComponent } from "../../core/sidemenu/sidemenu.component";

@Component({
    selector: 'main-page',
    templateUrl: './main.page.html',
    imports: [RouterOutlet, SideMenuComponent]
})

export class MainPage { }