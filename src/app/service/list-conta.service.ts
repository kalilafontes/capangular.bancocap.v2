import { Injectable } from '@angular/core';
import { Conta } from '../model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ListContaService {

  contas: Conta[] = [];

  constructor() {
    this.contas = [
      { cliente: 'Arthur', hash: 'yy0rbbmcqg', saldo: 750},
      { cliente: 'Daniel', hash: 'i2dulpvkie', saldo: 380 },
      { cliente: 'Kalila', hash: 'ao8qp73eme', saldo: 952 },
      { cliente: 'Nilson', hash: 'xiuxvjzj0b', saldo: 841 },
      { cliente: 'Reinaldo', hash: 'ecaxycnako', saldo: 365},
    ]


  }

  execute(): Conta[] {
    return this.contas;
  }
}
