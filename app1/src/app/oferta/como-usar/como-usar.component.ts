import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.OfertasService.getComoUsarOferta(this.route.parent.snapshot.params['id'])
      .then( (resposta : any) => {
        console.log(resposta);
        this.ComoUsar = resposta
      } )
  }

}
