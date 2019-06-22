import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {
  
  public ofertas: Array<Oferta>;
  public mensagem_erro: string;


  constructor(private ofertasService: OfertasService) { 
  }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);
    this.ofertasService.getOfertas()
    .then(
    (ofertas: Array<Oferta>) => { 
      this.ofertas = ofertas 
    })
  }

}
 