"use strict";
var core_1 = require('@angular/core');
var ng2_nvd3_component_1 = require('./ng2-nvd3.component');
var NvD3Module = (function () {
    function NvD3Module() {
    }
    NvD3Module.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [ng2_nvd3_component_1.nvD3Component],
                    exports: [ng2_nvd3_component_1.nvD3Component]
                },] },
    ];
    NvD3Module.ctorParameters = function () { return []; };
    return NvD3Module;
}());
exports.NvD3Module = NvD3Module;
