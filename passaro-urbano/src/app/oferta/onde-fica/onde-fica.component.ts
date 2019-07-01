import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public OndeFica: string = '';

  constructor( 
    private route : ActivatedRoute,
    private OfertasService: OfertasService 
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.OfertasService.getOndeFicaOferta(parametros.id)
      .then( (resposta : any) => {
        console.log(resposta);
        this.OndeFica = resposta;
      })
    })
  }

}
