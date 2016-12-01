import { Component, OnInit } from '@angular/core';
import { ClientService }     from "../services/client.service";

@Component({
    selector: 'client-grid',
    template: `
        <ag-grid-ng2 class="ag-fresh" style="width: 100%; height: 150px; padding-top: 2%;" [gridOptions]="gridOptions"></ag-grid-ng2>
    `,
    providers: [ ClientService ]
})
export class ClientGridComponent implements OnInit {
    rowData: any[] = [];

    constructor(private _clientService: ClientService){}

    ngOnInit() {
        this.getRow(this.gridOptions);
    }

    getRow(gridOptions) {
        this._clientService.getRow()
            .subscribe(
                row => {
                    this.rowData = row;
                    gridOptions.api.setRowData(this.rowData);
                },
                error => {
                    console.log(error);
                }
            )
    }

    columnDefs = [
        {headerName: 'nclient_id', field: 'nclient_id', width: 100},
        {headerName: 'vusstate', field: 'vusstate', width: 100},
        {headerName: 'vname', field: 'vname'},
        {headerName: 'vsocialnum', field: 'vsocialnum'},
        {headerName: 'vbank', field: 'vbank'},
        {headerName: 'vccard', field: 'vccard'},
        {headerName: 'dbegin', field: 'dbegin', type: 'date', cellFilter: 'date:"yyyy-MM-dd HH:mm"'},
        {headerName: 'dend', field: 'dend'},
        {headerName: 'vstate', field: 'vstate', width: 100},
        {headerName: 'vnote', field: 'vnote', width: 100},
        {headerName: 'ntclient', field: 'ntclient', width: 100},
    ];

    gridOptions = {
        rowData: this.rowData,
        columnDefs: this.columnDefs,
        rowSelection: 'single',
        enableColResize: true,
        enableSorting: true,
        enableFilter: true
    };
}
