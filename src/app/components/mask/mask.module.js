import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskComponent } from "./index";
var MaskModule = (function () {
    function MaskModule() {
    }
    MaskModule.forRoot = function () {
        return { ngModule: MaskModule, providers: [] };
    };
    return MaskModule;
}());
export { MaskModule };
MaskModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MaskComponent],
                exports: [MaskComponent],
                entryComponents: [MaskComponent]
            },] },
];
/** @nocollapse */
MaskModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mask.module.js.map