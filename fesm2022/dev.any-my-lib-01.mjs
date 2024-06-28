import * as i0 from '@angular/core';
import { Component, NgModule, Injectable } from '@angular/core';
import get from 'axios';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';

class MyLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.4", type: MyLibComponent, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
    <p style="background-color: coral;">
      Component 01 from library rendered with html tags as string input
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', standalone: true, imports: [], template: `
    <p style="background-color: coral;">
      Component 01 from library rendered with html tags as string input
    </p>
  ` }]
        }] });

// src/shared/shared.module.ts
// import 'my-lib/src/shared/styles/common.scss'; // Import your SCSS file
class SharedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.4", ngImport: i0, type: SharedModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: SharedModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ],
                    exports: [] // Initially leave exports empty
                }]
        }] });

class Lib02Component {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://catfact.ninja/fact'; // Replace with your API endpoint
        this.apiData = {};
    }
    ngOnInit() {
        this.fetchData();
        this.fetchData2();
    }
    fetchData() {
        console.error('LIBRARY: Api call with angular HTTP Client');
        this.http.get(this.apiUrl)
            .subscribe(response => {
            this.apiData = response;
            console.error('LIBRARY: Api call with angular HTTP Client success: response ', response);
        }, error => {
            console.error('LIBRARY: Error fetching data angular HTTP Client:', error);
        });
    }
    fetchData2() {
        console.error('LIBRARY: Api call with angular axios 3rd party package');
        get(this.apiUrl)
            .then((response) => {
            console.error('LIBRARY: Api call with angular axios 3rd party package success: response ', response.data);
        })
            .catch((error) => {
            console.error('LIBRARY: Error fetching data Api call with angular axios 3rd party package:', error);
            // Access specific error properties like error.status, error.message, etc.
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Lib02Component, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.4", type: Lib02Component, isStandalone: true, selector: "lib-lib-02", ngImport: i0, template: "<h1 class=\"my-heading\">Title 02</h1>\n<p class=\"comp\">Component 2: from library - rendered from html template. Make API Calls</p>\n<button class=\"btn\"></button>", styles: [".comp{padding:10px;background-color:#7fffd4}\n"], dependencies: [{ kind: "ngmodule", type: SharedModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Lib02Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-lib-02', standalone: true, imports: [SharedModule], template: "<h1 class=\"my-heading\">Title 02</h1>\n<p class=\"comp\">Component 2: from library - rendered from html template. Make API Calls</p>\n<button class=\"btn\"></button>", styles: [".comp{padding:10px;background-color:#7fffd4}\n"] }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class Lib02Service {
    constructor() { }
    callService() {
        console.error("Lib02Service - callService method called");
    }
    multiply(num) {
        return 21 * num;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Lib02Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Lib02Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Lib02Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of my-lib
 */
// export * from '../lib-style.scss'

/**
 * Generated bundle index. Do not edit.
 */

export { Lib02Component, Lib02Service, MyLibComponent };
//# sourceMappingURL=dev.any-my-lib-01.mjs.map
