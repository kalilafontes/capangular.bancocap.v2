import { Injectable } from '@angular/core';
import { Extrato } from '../model/extrato.model';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  extrato: Extrato[] = [];

  constructor() {
    this.extrato = [
      { dataHora: '13/12/2020 10:12:55', tipo: 'Transferência', valor: 500, hashOrigem: 'yy0rbbmcqg', hashDestino: 'i2dulpvkie' },
      { dataHora: '13/12/2020 12:52:24', tipo: 'Saque', valor: 700,hash: 'ao8qp73eme'},
      { dataHora: '13/12/2020 17:25:14', tipo: 'Depósito', valor: 250, hash: 'xiuxvjzj0b'},
      { dataHora: '13/12/2020 19:37:19', tipo: 'Depósito', valor: 369, hash: 'i2dulpvkie'},
      { dataHora: '13/12/2020 20:02:32', tipo: 'Transferência', valor: 852, hashOrigem: 'xiuxvjzj0b', hashDestino: 'ecaxycnako' },  
    ]

  }

  execute(): Extrato[] {
    return this.extrato;
  }
}
