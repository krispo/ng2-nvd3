import { ElementRef } from '@angular/core';
export declare class nvD3 {
    options: any;
    data: any;
    el: any;
    chart: any;
    svg: any;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    updateWithOptions(options: any): void;
    updateWithData(data: any): void;
    configure(chart: any, options: any, chartType: any): void;
    configureEvents(dispatch: any, options: any): void;
    clearElement(): void;
}
