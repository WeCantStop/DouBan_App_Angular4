import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export const Mask = // 动画的内容
    trigger('mask', [
        // state 控制不同的状态下对应的不同的样式
        state('show', style({ backgroundColor: 'rgba(255,255,255,1)'})),
        state('hide', style({ backgroundColor: 'rgba(0,0,0,0.3)'})),
        // transition 控制状态到状态以什么样的方式来进行转换
        transition('show <=> hide', animate('300ms linear')),
    ]);
