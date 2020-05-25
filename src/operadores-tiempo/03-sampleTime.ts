import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );
/**
 * El orden entrre map y sampleTime afecta el consumo de
 * memoria, aunque no es evidente, es mejor poner sampleTime, y luego map
 */

click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }))
).subscribe( console.log );
