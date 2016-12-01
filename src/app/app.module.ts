import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser'
import { FormsModule }             from '@angular/forms';
import { AppComponent }            from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
// Ag-grid
import { AgGridModule }            from 'ag-grid-ng2/main';
// Grids
import { ClientGridComponent }     from "./grids/client.grid";
import { BsServiceGridComponent }  from "./grids/bsservice.grid";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AgGridModule.withAotSupport(),
    ],
    declarations: [
        AppComponent,
        ClientGridComponent,
        BsServiceGridComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }