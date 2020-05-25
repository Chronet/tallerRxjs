import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


/**
 * 
 * distinctUntilChanged emite valores desde
 * que la emision actual no sea igual a la
 * pasada
 *
 */

const numeros$ = of<number | string>( 1,'1',1,3,3,2,2,4,4,5,3,1 );

numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
];

/**
 * desde que el valor no se primitivo (valores especificios, boleanos...)
 * se debe especificar los parametros
 */
from( personajes ).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log );