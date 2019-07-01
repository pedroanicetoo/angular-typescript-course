import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})

//FORMS USANDO DATABIDING
export class OrdemCompraComponent implements OnInit {
  
  public idPedidoCompra: number

  //Pedido
  public pedido: Pedido = new Pedido('', '', '', '');


  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';
  
  //controles de validação dos campos

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  //estados primitivos dos campos (pristine)

  public codePrimitiveState: boolean = true;
  public numberPrimitiveState: boolean = true;
  public complementPrimitiveState: boolean = true;
  public payWayPrimitiveState: boolean = true;

  //controlar botão confirmar compra

  public  formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }
  
  public atualizaEndereco(endereco: string):void {
    this.endereco = endereco;
    // console.log(this.endereco);

    this.codePrimitiveState = false;

    //se a string for maior que 3
    if(this.endereco.length > 3)
      this.enderecoValido = true
    else
      this.enderecoValido = false

    this.habilitaForm();
  }

  public atualizaNumero(numero: string):void {
    this.numero = numero;
    // console.log(this.numero);

    this.numberPrimitiveState = false;

    //se o numero for maior que 0
    if(this.numero.length > 0)
      this.numeroValido = true
    else
      this.numeroValido = false

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string):void {
    this.complemento = complemento;
    // console.log(this.complemento);

    this.complementPrimitiveState = false;

    //se o complemento for maior que 5
    if(this.complemento.length >= 1)
      this.complementoValido = true
    else
      this.complementoValido = false

    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string):void {
    this.formaPagamento = formaPagamento;
    // console.log(this.formaPagamento);
    
    this.payWayPrimitiveState = false;

    //se a forma de pagamento for debito ou dinheiro
    if(this.formaPagamento.length > 0)
      this.formaPagamentoValido = true
    else
      this.formaPagamentoValido = false

    this.habilitaForm();
  }

  public habilitaForm() : void {
    if(this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true)  {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        console.log(idPedido);
        this.idPedidoCompra = idPedido;
      })
  }

}
