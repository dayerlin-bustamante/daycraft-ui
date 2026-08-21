import { Routes } from "@angular/router";
import { AutocompletePage } from "../components/autocomplete/autocomplete.page";
import { AvatarPage } from "../components/avatar/avatar.page";
import { ButtonPage } from "../components/button/button.page";
import { CalendarPage } from "../components/calendar/calendar.page";
import { CardPage } from "../components/card/card.page";
import { CheckboxPage } from "../components/checkbox/checkbox.page";
import { CompoundInputPage } from "../components/compound-input/compound-input.page";
import { DatepickerPage } from "../components/datepicker/datepicker.page";
import { DropdownPage } from "../components/dropdown/dropdown.page";
import { IconPage } from "../components/icon/icon.page";
import { InputPage } from "../components/input/input.page";
import { ModalPage } from "../components/modal/modal.page";
import { PaginatorPage } from "../components/paginator/paginator.page";
import { PopoverPage } from "../components/popover/popover.page";
import { RadioPage } from "../components/radio/radio.page";
import { SkeletonPage } from "../components/skeleton/skeleton.page";
import { SlidePage } from "../components/slide/slide.page";
import { TablePage } from "../components/table/table.page";
import { TabsPage } from "../components/tabs/tabs.page";
import { TextareaPage } from "../components/textarea/textarea.page";
import { ToastPage } from "../components/toast/toast.page";
import { TogglePage } from "../components/toggle/toggle.page";
import { TooltipPage } from "../components/tooltip/tooltip.page";
import { TreePage } from "../components/tree/tree.component";
import { InfoPage } from "../information/info.page";

export const MAIN_ROUTES: Routes = [
    {
        component: InfoPage,
        path: 'information'
    },
    {
        component: AutocompletePage,
        path: 'components/autocomplete'
    },
    {
        component: AvatarPage,
        path: 'components/avatar'
    },
    {
        component: ButtonPage,
        path: 'components/button'
    },
    {
        component: CalendarPage,
        path: 'components/calendar'
    },
    {
        component: CardPage,
        path: 'components/card'
    },
    {
        component: CheckboxPage,
        path: 'components/checkbox'
    },
    {
        component: CompoundInputPage,
        path: 'components/compound-input'
    },
    {
        component: DatepickerPage,
        path: 'components/datepicker'
    },
    {
        component: DropdownPage,
        path: 'components/dropdown'
    },
    {
        component: IconPage,
        path: 'components/icon'
    },
    {
        component: InputPage,
        path: 'components/input'
    },
    // {
    //     component: LabelPage,
    //     path: 'components/label'
    // },
    {
        component: ModalPage,
        path: 'components/modal'
    },
    {
        component: PaginatorPage,
        path: 'components/paginator'
    },
    {
        component: PopoverPage,
        path: 'components/popover'
    },
    {
        component: RadioPage,
        path: 'components/radio'
    },
    {
        component: SkeletonPage,
        path: 'components/skeleton-loader'
    },
    {
        component: SlidePage,
        path: 'components/slide'
    },
    {
        component: TablePage,
        path: 'components/table'
    },
    {
        component: TabsPage,
        path: 'components/tabs'
    },
    {
        component: TextareaPage,
        path: 'components/textarea'
    },
    {
        component: ToastPage,
        path: 'components/toast'
    },
    {
        component: TogglePage,
        path: 'components/toggle'
    },
    {
        component: TooltipPage,
        path: 'components/tooltip'
    },
    {
        component: TreePage,
        path: 'components/tree'
    }
]