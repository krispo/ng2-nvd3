/// <reference path="../../typings/globals/d3/index.d.ts" />
/// <reference path="../../typings/globals/nvd3/index.d.ts" />
import { OnChanges, ElementRef, SimpleChanges } from '@angular/core';
export declare class nvD3 implements OnChanges {
    options: any;
    data: any;
    el: HTMLElement;
    chart: any;
    svg: any;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    updateWithOptions(options: any): void;
    updateWithData(data: any): void;
    updateSize(): void;
    configure(chart: any, options: any, chartType: any): void;
    configureEvents(dispatch: any, options: any): void;
    clearElement(): void;
}
