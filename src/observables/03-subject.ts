import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value ),
    error: error => console.warn('error: ', error ),
    complete: () => console.info('completed for observer')
};

/** Ventajas Observable
 * 1- Creacion de instancias separadas con mismos metodos.
 */
const intervalo$ = new Observable<number>( subs => {


    // Ojo interval en vez de timeout
    const intervalID = setInterval( () => {
       subs.next( Math.random() )
    }, 1000);

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido');
    }

});

/**  Ventajas del subject
 * 1- Casteo múltiple, muchas suscripcion misma informacion.
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();
intervalo$.subscribe( subject$ ); //Enlaza el subject


/** Ejmplo visualizado de ventajas observable */
// const subs1 = intervalo$.subscribe( rnd => console.log( 'subs1', rnd ) );
// const subs2 = intervalo$.subscribe( rnd => console.log( 'subs2', rnd ) );


/** Ejemplo visualizado de ventajas subject */
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {

    subject$.next(10);

    subject$.complete();
    /** Aunque ejecute el complete, la instancia, osea subs 1 y 2 siguen corriendo
     *  (el interval) ,
     *  Para destruirlas por completo, se necesita el unsuscribe, ahí, radica la 
     *  diferencia.
     */
    subject$.unsubscribe();

}, 3500);