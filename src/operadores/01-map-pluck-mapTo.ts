import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';
// Observable que emite valores numericos en secuencia


/** 
 * Se quiere que el observable sea mas puro posible
 * osea que no tenga que operar un observable en cada componente
 * , si no, solo invocar el que es adecuado
 */
// range(1,5).subscribe( val => console.log(val * 10) )



// range(1,5).pipe(
//     map<number, number>( val => val*10)
// ).subscribe( console.log )


// range(1,5).pipe(
//     map<number, string>( val => (val*10).toString())
// ).subscribe( console.log )


/**
 * Es una buena practica especificar el fromEvent, ya que cobre
 * demasiadas funcuiones.
 */
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);

/** 
 * Manera mas facil de hacer lo mismo que lo de arriba, y aceder
 * a propiedades dentro de los objetos
 */
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

// keyup$.subscribe( val => console.log('map:', val.key));
keyup$.subscribe( console.log );
keyupCode$.subscribe( code => console.log( 'map:', code ) );
keyupPluck$.subscribe( code => console.log( 'pluck', code ) );
keyupMapTo$.subscribe( code => console.log( 'mapTo', code ) );