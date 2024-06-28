import { Component } from '@angular/core';
// Import Axios (Optional)
import get from 'axios'; // Import only the 'get' method
import { SharedModule } from '../../shared/shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class Lib02Component {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLTAyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL2xpYi0wMi9saWItMDIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL3NyYy9saWIvbGliLTAyL2xpYi0wMi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELDBCQUEwQjtBQUMxQixPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsQ0FBRSwrQkFBK0I7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFlMUQsTUFBTSxPQUFPLGNBQWM7SUFHekIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxXQUFNLEdBQUcsNEJBQTRCLENBQUMsQ0FBRSxpQ0FBaUM7UUFDekUsWUFBTyxHQUFRLEVBQUUsQ0FBQztJQUNxQixDQUFDO0lBRXhDLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdkIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0RBQStELEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0YsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxtREFBbUQsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBQ3hFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25CLElBQUksQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkVBQTJFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVHLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BHLDBFQUEwRTtRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7OEdBL0JZLGNBQWM7a0dBQWQsY0FBYyxzRUNyQjNCLHdLQUU2Qix1R0RlakIsWUFBWTs7MkZBSVgsY0FBYztrQkFQMUIsU0FBUzsrQkFDRSxZQUFZLGNBQ1YsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gSW1wb3J0IEF4aW9zIChPcHRpb25hbClcbmltcG9ydCBnZXQgZnJvbSAnYXhpb3MnOyAgLy8gSW1wb3J0IG9ubHkgdGhlICdnZXQnIG1ldGhvZFxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7ICAvLyBJbXBvcnQgSHR0cEVycm9yUmVzcG9uc2VcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW50ZXJmYWNlIE15UmVzcG9uc2Uge1xuICAvLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZXhwZWN0ZWQgcmVzcG9uc2UgZGF0YVxuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saWItMDInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcbnRlbXBsYXRlVXJsOiAnLi9saWItMDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbGliLTAyLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIExpYjAyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXBpVXJsID0gJ2h0dHBzOi8vY2F0ZmFjdC5uaW5qYS9mYWN0JzsgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBlbmRwb2ludFxuICBhcGlEYXRhOiBhbnkgPSB7fTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgdGhpcy5mZXRjaERhdGEyKCk7XG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgY29uc29sZS5lcnJvcignTElCUkFSWTogQXBpIGNhbGwgd2l0aCBhbmd1bGFyIEhUVFAgQ2xpZW50Jyk7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybClcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmFwaURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgY29uc29sZS5lcnJvcignTElCUkFSWTogQXBpIGNhbGwgd2l0aCBhbmd1bGFyIEhUVFAgQ2xpZW50IHN1Y2Nlc3M6IHJlc3BvbnNlICcsIHJlc3BvbnNlKTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTElCUkFSWTogRXJyb3IgZmV0Y2hpbmcgZGF0YSBhbmd1bGFyIEhUVFAgQ2xpZW50OicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hEYXRhMigpIHtcbiAgICBjb25zb2xlLmVycm9yKCdMSUJSQVJZOiBBcGkgY2FsbCB3aXRoIGFuZ3VsYXIgYXhpb3MgM3JkIHBhcnR5IHBhY2thZ2UnKTtcbiAgICBnZXQodGhpcy5hcGlVcmwpXG4udGhlbigocmVzcG9uc2U6YW55KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ0xJQlJBUlk6IEFwaSBjYWxsIHdpdGggYW5ndWxhciBheGlvcyAzcmQgcGFydHkgcGFja2FnZSBzdWNjZXNzOiByZXNwb25zZSAnLCByZXNwb25zZS5kYXRhKTtcbn0pXG4uY2F0Y2goKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKCdMSUJSQVJZOiBFcnJvciBmZXRjaGluZyBkYXRhIEFwaSBjYWxsIHdpdGggYW5ndWxhciBheGlvcyAzcmQgcGFydHkgcGFja2FnZTonLCBlcnJvcik7XG4gIC8vIEFjY2VzcyBzcGVjaWZpYyBlcnJvciBwcm9wZXJ0aWVzIGxpa2UgZXJyb3Iuc3RhdHVzLCBlcnJvci5tZXNzYWdlLCBldGMuXG59KTtcbn1cbn1cbiIsIjxoMSBjbGFzcz1cIm15LWhlYWRpbmdcIj5UaXRsZSAwMjwvaDE+XG48cCBjbGFzcz1cImNvbXBcIj5Db21wb25lbnQgMjogZnJvbSBsaWJyYXJ5IC0gcmVuZGVyZWQgZnJvbSBodG1sIHRlbXBsYXRlLiBNYWtlIEFQSSBDYWxsczwvcD5cbjxidXR0b24gY2xhc3M9XCJidG5cIj48L2J1dHRvbj4iXX0=