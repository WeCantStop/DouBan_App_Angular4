import { trigger, style, transition, animate } from '@angular/animations';

export const FadeIn = trigger('fadeIn', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
    ]),
    transition('* => void', [
        animate(300, style({ opacity: 0 }))
    ])
]);
