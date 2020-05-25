import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";


/**
 * Sample limita la salida en suscripcion a cuando
 * se emite el observable2 que se le manda, pero el observable1
 * sigue ocurriendo, solo no esta emitiendo
 * En resumen es una combinacion de si uno emite y el otro tambien
 */


const interval$ = interval(500);
const click$ = fromEvent( document, 'click');


interval$.pipe(
    sample(click$)
).subscribe( console.log );