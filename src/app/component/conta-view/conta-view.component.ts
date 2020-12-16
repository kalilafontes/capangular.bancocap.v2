import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';
import { ButtonComponent } from 'src/app/component/button/button.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ListContaService } from 'src/app/service/list-conta.service';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['../../app.component.css', './conta-view.component.html']
})
export class ContaViewComponent implements OnInit {
  conta: Conta = { cliente: "Kalila", hash: "1234463131", saldo: 2516 };

  frameworkComponents: any;
  api: any;

  colunas = [
    { field: 'cliente', editable: true },
    { field: 'hash' , editable: true },
    { field: 'saldo', valueFormatter: params => this.currencyFormatter(params.data.saldo, 'R$') , editable: true },
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onEditButtonClick.bind(this),
        label: 'Edit'
      },
    },
    {
      headerName: 'Save',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onSaveButtonClick.bind(this),
        label: 'Save'
      },
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onDeleteButtonClick.bind(this),
        label: 'Delete'
      },
    },
  ];

  linhas = [];

  constructor(private contaListService: ListContaService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonComponent,
    }
    this.linhas = contaListService.execute();
  }

  currencyFormatter(saldo, sign) {
    var decimal = saldo.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' + formatado;
  }

  ngOnInit(): void {
  }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  onEditButtonClick(params) {
    this.api.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: 'cliente'
    });
  }

  onSaveButtonClick(params) {
    this.api.stopEditing();
  }

  onDeleteButtonClick(params) {

    this.api.updateRowData({ remove: [params.data] });
  }

  onGridReady(params) {
    this.api = params.api;
  }

}
