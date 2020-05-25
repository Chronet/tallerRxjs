import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';
/**
 * El operador distinct solo deja pasar el valor una sola vez
 * a lo largo de la suscripcion al observable
 */

/**
 * El uno string se considere distinto al uno tipo number
 */
const numeros$ = of<number | string>( 1,'1',1,3,3,2,2,4,4,5,3,1 );

numeros$.pipe(
    distinct()
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

/**
 * distinct no distingue diferencias de objetos, abra que darle 
 * mas información
 */
from( personajes ).pipe(
    distinct( p => p.nombre )
).subscribe( console.log );