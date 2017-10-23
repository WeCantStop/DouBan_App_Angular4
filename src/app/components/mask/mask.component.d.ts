import { EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
export declare class MaskComponent implements OnDestroy {
    /**
     * 点击是否允许关闭（默认：false）
     *
     * @type {boolean}
     */
    backdrop: boolean;
    /**
     * 关闭回调
     */
    close: EventEmitter<{}>;
    private observer;
    _shown: boolean;
    /**
     * 显示，并返回一个Observable
     */
    show(): Observable<void>;
    /**
     * 隐藏
     *
     * @param {boolean} [is_backdrop=false] 是否手动点击关闭（默认：false）
     */
    hide(is_backdrop?: boolean): boolean;
    ngOnDestroy(): void;
}
