import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable} from 'rxjs';
import { interval } from 'rxjs'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  
  public oferta: Oferta  

  constructor(
    private route : ActivatedRoute, 
    private OfertasService: OfertasService
    ) {}
  
  ngOnInit() {
    // console.log(this.route.snapshot.params['id'])
    // this.route.params.subscribe(( parametro : any ) => {
    //   console.log(parametro.id)
    // })
    this.OfertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then( ( oferta: Oferta ) => {
      this.oferta = oferta;
      console.log(oferta);
    })


    //observable exemplo
    /*
    this.route.params.subscribe(
      (parametro: any) => { console.log(parametro) },
      (erro: any) => console.log(erro),
      () => console.log('processamento foi classificado como concluído!') 
    )
    */
    //Observables examples =)
    let tempo = interval(2000)
    tempo.subscribe(( intervalo: number ) => {
      console.log(intervalo)
    })
  }

}
