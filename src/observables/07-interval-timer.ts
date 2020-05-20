// import {  } from 'rxjs';
import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

/**
 * el parametro que se les da, es el tiempo en ms
 */
const interval$ = interval(1000);

// const timer$    = timer(2000);
// const timer$    = timer( 2000, 1000 );
const timer$    = timer( hoyEn5 );  // En que momento se debe disparar

console.log('begin');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('finish');