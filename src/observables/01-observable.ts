import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create();  // Posible forma de crear un observable, Poco usada;
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Navegador');

    // Forzar un error;
    // const a  = undefined;
    // a.nombre = 'Jairo';

    subs.complete();

    //Estos valores no serán visualizados
    subs.next('No se ve');

});

obs$.subscribe( observer );

// obs$.subscribe(  
//     valor => console.log('Next: ', valor),
//     error => console.warn('Error: ', error),
//     () => console.info('Finished') 
// );