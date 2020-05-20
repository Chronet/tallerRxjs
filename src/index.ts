import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value ),
    error: error => console.warn('error: ', error ),
    complete: () => console.info('completed')
};
const intervalos$ = new Observable<number>( suscriber => {

    // Crear un contador, 1,2,3,4,5,6,......
    let cont = 0;

    const interval = setInterval( () => {
        
        suscriber.next(cont++);
        //Demostracion de que el observable se sigue ejecutando
        //aun habiendo desuscribido de la instancia
        console.log(cont);  
                            
    }, 1000);


    // El return interviene cuando ocurre un unsuscribe a la instancia
    return () => {          
        clearInterval(interval);
        console.log('Interval destroyed');
    }

});

const subs = intervalos$.subscribe( num => console.log( 'Num:', num ));

setTimeout(() => {

    subs.unsubscribe();
    console.log('Completed');

}, 3000);