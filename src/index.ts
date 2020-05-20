import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value ),
    error: error => console.warn('error: ', error ),
    complete: () => console.info('completed for observer')
};
const intervalos$ = new Observable<number>( suscriber => {

    // Crear un contador, 1,2,3,4,5,6,......
    let cont = 0;

    const interval = setInterval( () => {
        
        suscriber.next(cont++);
        //Demostracion de que el observable se sigue ejecutando
        //aun habiendo desuscribido de la instancia
        // console.log(cont);  
                            
    }, 1000);

    setTimeout(() => {
        // Unsubscribe es diferente al complete() del observable
        // El complete es el que ejecuta return
        suscriber.complete();
    }, 2500);


    // El return interviene cuando ocurre un unsuscribe a la instancia
    return () => {          
        clearInterval(interval);
        console.log('Interval destroyed');
    }

});

const subs1 = intervalos$.subscribe( num => console.log( 'sub 1 Num:', num ));
const subs2 = intervalos$.subscribe( num => console.log( 'sub 2 Num:', num ));
const subs3 = intervalos$.subscribe( num => console.log( 'sub 3 Num:', num ));

subs1.add( subs2 )
     .add( subs3 );

setTimeout(() => {
    
    subs1.unsubscribe();
    console.log('Completed for unsubscribe');

}, 6000);