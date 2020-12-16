import { Component, OnInit } from '@angular/core';
import { Extrato } from 'src/app/model/extrato.model';
import { Operacao } from 'src/app/model/operacao.model';
import { ExtratoService } from 'src/app/service/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['../../app.component.css', './extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  // conta: Conta = { cliente: "Kalila", hash: "1234463131", saldo: 2516 };

  colunas = [
    { field: 'dataHora' },
    { field: 'tipo' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$') },
    { field: 'hash' },
    { field: 'hashOrigem' },
    { field: 'hashDestino' }
  ];
  linhas = [];
  /* operacoes: Operacao[] = [
    { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 550, hashOrigem: '' },
    { data: new Date(2020, 2, 12), tipo: 'Depósito', valor: 50.99, hashOrigem: '' },
    { data: new Date(2020, 2, 10), tipo: 'Transferência', valor: 1300, hashOrigem: '1234463131' },
    { data: new Date(2020, 3, 1), tipo: 'Transferência', valor: 5000, hashOrigem: '1234463131' },
    { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 55.10, hashOrigem: '' },
  ]; */

  constructor(private extratoService: ExtratoService) { 
    this.linhas = extratoService.execute();
  }

  ngOnInit(): void {
  }

  currencyFormatter(valor, sign) {
    var decimal = valor.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' + formatado;
  }

  dateFormatter(date: Date) {
    console.log(date);
    return date.toLocaleDateString();
  }


}

// Data/Hora,
//  Valor,
// Tipo de Operação (Depósito, Saque ou Transferência)
// e, em se tratando de transferência, o Hash da Conta de Origem da transferência.

