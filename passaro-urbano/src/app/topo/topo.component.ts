import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

 public ofertas: Observable<Array<Oferta>>;
 private subjectPesquisa: Subject<string>  = new Subject


  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa // retorna Oferta[]
      // .debounceTime(1000)//executa a ação do sitchMap após 1s
      .distinctUntilChanged() // executa ação somente se a requisição for diferente
      .switchMap((termo: string) => {
          console.log('requisição http para a api')
          if(termo.trim() === '') {
            //retorna um observable de array de ofertas vazio
            return Observable.of<Oferta[]>([])
          }

          return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch( (err: any) => {
        console.log(err);
        return Observable.of<Oferta[]>([])
      })
  }

  //2 formas
  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  //usando variável para pesquisa como parâmetro
  public pesquisa(termoDaBusca: string): void {
    console.log('keyup character: ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca);    
    //Observable os 3 parâmetros (next(), error e completem )
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro:any) => console.log('ERRO STATUS: '+ erro.status),
    //   () => console.log('Fluxo de Eventos Completos')
    // )
  }
  public limpaPesquisa():void {
    this.subjectPesquisa.next('')
  }

}
