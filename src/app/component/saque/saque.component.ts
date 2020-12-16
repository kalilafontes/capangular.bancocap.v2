import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/model/conta.model';
import { ListContaService } from 'src/app/service/list-conta.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['../../app.component.css', './saque.component.css']
})
export class SaqueComponent implements OnInit {
  error: boolean = false;
  errorDesc: string = "";
  date: Date = new Date();
  hashSelecionada: string = "";
  hash:Conta [];

  constructor(private router: Router, private contaListService: ListContaService) {  
    this.hash = contaListService.execute();
  }

  ngOnInit(): void {
  }

  onSaque(form: NgForm) {
    console.log(
      form.value.hash,
      form.value.valor,
    );
    this.refeshDateTime();

    if (form.value.hash == "") {
      this.error = true;
      this.errorDesc = "Preencha o hash da conta"
    } else if (form.value.valor == undefined || form.value.valor == NaN || form.value.valor == "") {
      this.error = true;
      this.errorDesc = "Preencha o valor"
    } else {
      this.error = false;
      this.router.navigate(['/extrato']);
    }
  }

  refeshDateTime(): void {
    this.date = new Date();
    console.log(this.date);
  }
}


// Uma tela de saque deverá ser construída com os seguintes
// campos: DataHora (preencher de forma automática com a data/hora atual),
// Valor e Hash da Conta;
// Exibir um erro caso QUALQUER campo não seja preenchido.
