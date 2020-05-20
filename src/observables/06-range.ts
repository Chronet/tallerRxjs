import { of, range, asyncScheduler} from 'rxjs';

// const src$ = of(1,2,3,4,5);
// const src$ = range( -5, 10 ); // Lega hastab el 4, el 10 significa emisiones
// const src$ = range( 5 ); // Comienza de 0 hasta 4

const src$ = range( 1, 5, asyncScheduler );

console.log('begin');
src$.subscribe( console.log );
console.log('finish');