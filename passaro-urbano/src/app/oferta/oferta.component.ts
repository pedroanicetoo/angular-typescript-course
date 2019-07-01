import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
// import { Observable, interval, observable, Subject, pipe, Observer } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  // private tempoObservableSubscription : Subscription
  // private meuObservableTesteSubscrition: Subscription


  public oferta: Oferta  

  constructor(
    private route : ActivatedRoute, 
    private OfertasService: OfertasService
    ) {}
  
  ngOnInit() {
  
    this.route.params.subscribe((parametros: Params) => {
      
      this.OfertasService.getOfertaPorId(parametros.id)
      .then( ( oferta: Oferta ) => {
        this.oferta = oferta;
        console.log(oferta);
      })
    })

  //   //observable exemplo
  //   /*
  //   this.route.params.subscribe(
  //     (parametro: any) => { console.log(parametro) },
  //     (erro: any) => console.log(erro),
  //     () => console.log('processamento foi classificado como concluído!') 
  //   )
  //   */
  //   //Observables examples =)
    
  //   let tempo = interval(2000)
  //   this.tempoObservableSubscription = tempo.subscribe(( intervalo: number ) => {
  //     console.log(intervalo)
  //   })
    


  // //observable (observável)

  // let meuObservableTeste = Observable.create((observer: Observer<number>) => { 
  //   observer.next(5)
  //   observer.next(7)
  //   // observer.error('Algum erro foi encontrado na stream de eventos');
  //   observer.complete();
  //   observer.next(3);
  //  })

  // //observable (observador)

  // this.meuObservableTesteSubscrition = meuObservableTeste.subscribe(
  //   (resultado: number) => console.log(resultado + 10),
  //   (erro: string) => console.log(erro),
  //   //não gera saída mais após o erro
  //   // (resultado: number) => console.log(resultado + 20)
  //   () => console.log('Stream de eventos foi finalizada')
  // )
  }

  ngOnDestroy() {
    // destruir um Observable 
    // this.meuObservableTesteSubscrition.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}
