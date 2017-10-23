import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
var MaskComponent = (function () {
    function MaskComponent() {
        /**
         * 点击是否允许关闭（默认：false）
         *
         * @type {boolean}
         */
        this.backdrop = false;
        /**
         * 关闭回调
         */
        this.close = new EventEmitter();
        this._shown = false;
    }
    /**
     * 显示，并返回一个Observable
     */
    MaskComponent.prototype.show = function () {
        var _this = this;
        setTimeout(function () {
            _this._shown = true;
        });
        return Observable.create(function (observer) {
            _this.observer = observer;
        });
    };
    /**
     * 隐藏
     *
     * @param {boolean} [is_backdrop=false] 是否手动点击关闭（默认：false）
     */
    MaskComponent.prototype.hide = function (is_backdrop) {
        if (is_backdrop === void 0) { is_backdrop = false; }
        if (is_backdrop === true && this.backdrop === false)
            return false;
        this._shown = false;
        this.close.emit();
        setTimeout(function () {
        }, 300);
    };
    MaskComponent.prototype.ngOnDestroy = function () {
        if (this.observer && this.observer instanceof Subscription) {
            this.observer.unsubscribe();
        }
    };
    return MaskComponent;
}());
export { MaskComponent };
MaskComponent.decorators = [
    { type: Component, args: [{
                selector: 'yk-mask',
                template: "<div class=\"weui-mask\" [ngClass]=\"{'weui-mask--visible': _shown }\" (click)=\"hide(true)\"></div>",
                styles: [
                    "\n        .weui-mask {\n            opacity: 0;\n            visibility: hidden;\n            transition-duration: .3s;\n        }\n        .weui-mask--visible {\n            opacity: 1;\n            visibility: visible;\n        }\n        "
                ]
            },] },
];
/** @nocollapse */
MaskComponent.ctorParameters = function () { return []; };
MaskComponent.propDecorators = {
    'backdrop': [{ type: Input },],
    'close': [{ type: Output },],
};
//# sourceMappingURL=mask.component.js.map