import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

/**
 * Ignora cualquier emision en el tiempo especificado
 * Ese tiempo de ignorar comienza cuando se hace una primera emision
 */
const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
)// .subscribe( console.log );


//Ejmplo 2 
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

/**
 * Con la configuracion puedo hacer que incluye la primera y la ultima emision
 * 
 */
input$.pipe(
    throttleTime( 2000, asyncScheduler, {
        leading: true,
        trailing: true
    } ),
    pluck( 'target', 'value' ),
    distinctUntilChanged()  
).subscribe( console.log );