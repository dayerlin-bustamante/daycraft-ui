import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { DAY_MODAL_CONFIGURATION, IModalConfiguration } from '@dayerlin-bustamante/modal';
import { DAY_POPOVER_CONFIGURATION, IPopoverConfiguration } from '@dayerlin-bustamante/popover';
import { DAY_SLIDE_CONFIGURATION, ISlideConfiguration } from '@dayerlin-bustamante/slide';
import { DAY_TOAST_CONFIGURATION, IToastConfiguration } from '@dayerlin-bustamante/toast';
import { DAY_TOOLTIP_CONFIGURATION, ITooltipConfiguration } from '@dayerlin-bustamante/tooltip';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes), provideClientHydration(),
        {
            provide: DAY_POPOVER_CONFIGURATION,
            useValue: <IPopoverConfiguration>{
                behavior: 'fill',
                horizontalPosition: 'center',
                verticalPosition: 'top',
                gap: 0,
                disableCloseOnBackdrop: false
            }
        },
        {
            provide: DAY_SLIDE_CONFIGURATION,
            useValue: <ISlideConfiguration>{
                defaultMinWidth: 400,
                defaultMaxWidth: 600,
                sidebarWidth: 300,
                resize: false,
                overlay: true,
                disableCloseOnBackdrop: false,
                cssClasses: [],
                overlayCssClasses: [],
                data: {}
            }
        },
        {
            provide: DAY_MODAL_CONFIGURATION,
            useValue: <IModalConfiguration>{
                size: 'medium',
                cssClasses: [],
                data: {},
                disableCloseOnBackdrop: false
            }
        },
        {
            provide: DAY_TOAST_CONFIGURATION,
            useValue: <IToastConfiguration>{
                verticalPosition: 'bottom',
                gap: 20,
                autoClose: true,
                timeOut: 4000,
                cssClasses: [],
                data: {}
            }
        },
        {
            provide: DAY_TOOLTIP_CONFIGURATION,
            useValue: <ITooltipConfiguration>{
                behavior: 'tooltip',
                horizontalPosition: 'center',
                verticalPosition: 'top',
                gap: 2,
                spacing: {
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                },
                cssClasses: [],
                delayIn: 330,
                delayOut: 220
            }
        },
    ]
};
