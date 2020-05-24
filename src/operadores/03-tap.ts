import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

/**
 * Notar que return no importa para nada
 * y tap funciona perfectamente para futura
 * depuración
 */
numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100; 
    }),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe( val => console.log('subs', val) )