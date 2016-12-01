import { Component, OnInit } from '@angular/core';
import { BsServiceService }  from "../services/bsservice.service";

@Component({
    selector: 'bsservice-grid',
    template: `
        <ag-grid-ng2 class="ag-fresh" style="width: 100%; height: 150px; padding-top: 2%;" [gridOptions]="gridOptions"></ag-grid-ng2>
    `,
    providers: [ BsServiceService ]
})
export class BsServiceGridComponent implements OnInit {
    rowData: any[] = [];

    constructor(private _bsserviceService: BsServiceService){}

    ngOnInit() {
        this.getRow(this.gridOptions);
    }

    getRow(gridOptions) {
        this._bsserviceService.getRow()
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
        {headerName: 'nserv_id', field: 'nserv_id', width: 100},
        {headerName: 'nservt', field: 'nservt', width: 100},
        {headerName: 'vtarstate', field: 'vtarstate', width: 100},
        {headerName: 'dinput', field: 'dinput', width: 100},
        {headerName: 'vstate', field: 'vstate', width: 100},
        {headerName: 'nservint', field: 'nservint', width: 100},
        {headerName: 'nscard', field: 'nscard', width: 100},
        {headerName: 'nsum', field: 'nsum', width: 100},
        {headerName: 'nfullsum', field: 'nfullsum', width: 100},
        {headerName: 'vtarstateold', field: 'vtarstateold', width: 100},
        {headerName: 'ncpctrate', field: 'ncpctrate', width: 100},
        {headerName: 'ncpctserv', field: 'ncpctserv', width: 100},
        {headerName: 'dbegin', field: 'dbegin', width: 100, type: 'date', cellFilter: 'date:"yyyy-MM-dd HH:mm"'},
        {headerName: 'dend', field: 'dend', width: 100, type: 'date', cellFilter: 'date:"yyyy-MM-dd HH:mm"'},
        {headerName: 'ddate', field: 'ddate', width: 100, type: 'date', cellFilter: 'date:"yyyy-MM-dd HH:mm"'},
        {headerName: 'nbsper', field: 'nbsper', width: 100},
        {headerName: 'ncpctservout', field: 'ncpctservout', width: 100},
        {headerName: 'ncpctrateout', field: 'ncpctrateout', width: 100}
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