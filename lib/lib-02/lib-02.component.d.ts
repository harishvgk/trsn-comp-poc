import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class Lib02Component implements OnInit {
    private http;
    apiUrl: string;
    apiData: any;
    constructor(http: HttpClient);
    ngOnInit(): void;
    fetchData(): void;
    fetchData2(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lib02Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lib02Component, "lib-lib-02", never, {}, {}, never, never, true, never>;
}
