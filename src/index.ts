import { Observable } from 'rxjs';


// const obs$ = Observable.create();  // Posible forma de crear un observable, Poco usada;
const obs$ = new Observable( subs => {

    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Navegador');

    subs.complete();

    //Estos valores no serán visualizados
    subs.next('No se ve');

});

obs$.subscribe( console.log )

