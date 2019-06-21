import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'


import 'rxjs/add/operator/toPromise';

@Injectable()

export class OfertasService {

    constructor(private http: Http){}
    
    public getOfertas(): Promise<Oferta[]> {
        // efetuar uma requisição http
        //Retornar um promise Oferta[]
        return this.http.get('http://localhost:3000/ofertas')
        .toPromise()
        .then(( resposta:any ) => resposta.json())        
    }

    // public getOfertas2(): Promise<Array<Oferta>> {
    //     return new Promise((resolve, reject) => {
    //         //algum tipo de processamento que chama a função reslve ou reject
    //         let deu_certo = true;
    //         if(deu_certo)
    //         setTimeout(() => resolve(this.ofertas),3000);
    //         else
    //         reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
    //     })
    //     .then(( ofertas: Array<Oferta> ) => {
    //         //fazer alguma tentativa
    //         console.log('primeiro then');
    //         return ofertas
    //     })
    //     .then (( ofertas: Array<Oferta> ) => {
    //         console.log('segundo then');
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => { resolve2( ofertas ) },3000)
    //         })
    //     })
    //     .then(( ofertas: Array<Oferta> ) => {
    //         console.log('terceiro then executado após 3 segundos pq estava agardando o segudo then (alguma requisição)')
    //         return ofertas
    //     })    
    // }   
}