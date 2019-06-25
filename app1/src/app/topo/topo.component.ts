import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }
  //2 formas
  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  //usando variável para pesquisa como parâmetro
  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    );
  }
}
