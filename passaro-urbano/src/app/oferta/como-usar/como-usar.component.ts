import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {
  
  public ComoUsar: string = ''
  constructor( 
    private route : ActivatedRoute,
    private OfertasService: OfertasService 
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.OfertasService.getComoUsarOferta(parametros.id)
      .then( (resposta : any) => {
        console.log(resposta);
        this.ComoUsar = resposta
      } )
    })
  }

}
