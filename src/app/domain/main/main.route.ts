import { Routes } from "@angular/router";
import { AutocompletePage } from "../components/autocomplete/autocomplete.page";
import { AvatarPage } from "../components/avatar/avatar.page";
import { ButtonPage } from "../components/button/button.page";
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
    // {
    //     component: CalendarPage,
    //     path: 'components/calendar'
    // },
    // {
    //     component: CardPage,
    //     path: 'components/card'
    // },
    // {
    //     component: CheckboxPage,
    //     path: 'components/checkbox'
    // },
    // {
    //     component: CompoundInputPage,
    //     path: 'components/compound-input'
    // },
    // {
    //     component: DatepickerPage,
    //     path: 'components/datepicker'
    // },
    // {
    //     component: DropdownPage,
    //     path: 'components/dropdown'
    // },
    // {

    //     component: GanttPage,
    //     path: 'components/gantt'
    // },
    // {
    //     component: IconPage,
    //     path: 'components/icon'
    // },
    // {
    //     component: InputPage,
    //     path: 'components/input'
    // },
    // {
    //     component: LabelPage,
    //     path: 'components/label'
    // },
    // {
    //     component: ModalPage,
    //     path: 'components/modal'
    // },
    // {
    //     component: PaginatorPage,
    //     path: 'components/paginator'
    // },
    // {
    //     component: PopoverPage,
    //     path: 'components/popover'
    // },
    // {
    //     component: RadioPage,
    //     path: 'components/radio'
    // },
    // {
    //     component: SkeletonLoaderPage,
    //     path: 'components/skeleton-loader'
    // },
    // {
    //     component: SlidePage,
    //     path: 'components/slide'
    // },
    // {
    //     component: TablePage,
    //     path: 'components/table'
    // },
    // {
    //     component: TabsPage,
    //     path: 'components/tabs'
    // },
    // {
    //     component: TextareaPage,
    //     path: 'components/textarea'
    // },
    // {
    //     component: ToastPage,
    //     path: 'components/toast'
    // },
    // {
    //     component: TogglePage,
    //     path: 'components/toggle'
    // },
    // {
    //     component: TooltipPage,
    //     path: 'components/tooltip'
    // },
    // {
    //     component: TreePage,
    //     path: 'components/tree'
    // }
]