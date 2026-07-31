import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../core/components/header/header.component";
import { SideMenuComponent } from "../../core/components/sidemenu/sidemenu.component";

@Component({
    selector: 'main-page',
    templateUrl: './main.page.html',
    imports: [RouterOutlet, SideMenuComponent, HeaderComponent]
})

export class MainPage { }