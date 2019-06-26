import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { HttpClient} from '@angular/common/http';
import { URL_API } from './app.api';
import { Observable, interval, observable, Subject, pipe, Observer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import 'rxjs-compat';

@Injectable()

export class OfertasService {
    
    constructor(private http: HttpClient){}
    
    public getOfertas(): Promise<Array<Oferta>> {
        // efetuar uma requisição http
        //Retornar um promise Oferta[] ou Oferta
        return this.http.get(`${URL_API}ofertas?destaque=true`)
        .toPromise()
        .then(( resposta:any ) => resposta)        
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}ofertas?categoria=${categoria}`)
        .toPromise()
        .then(( resposta:any ) => resposta)
    }

    public getOfertaPorId(id : number) : Promise<Oferta> {
        return this.http.get(`${URL_API}ofertas?id=${id}`)
        .toPromise()
        .then(( resposta: Response ) => resposta[0])
    } 

    public getComoUsarOferta( id: number ) : Promise<string> {
        return this.http.get(`${URL_API}como-usar?id=${id}`)
        .toPromise()
        .then(( resposta:Response ) => resposta[0].descricao)
    }

    public getOndeFicaOferta( id: number ) : Promise<string> {
        return this.http.get(`${URL_API}onde-fica?id=${id}`)
        .toPromise()
        .then(( resposta:Response ) => resposta[0].descricao)
    }

    public pesquisaOfertas(termo: string): Observable<Array<Oferta>> {
        return this.http.get(`${URL_API}ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta:any) => resposta)
    }
}