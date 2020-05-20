import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2,3,4,5,6]); //Solo es un argumento, UN ARRAY
const obs$ = of<number>(...[1,2,3,4,5,6],7,8); //eL .... SE LLAMA 'SPREAD' LOL

/** Ejemplo de un any, no recomendado, mejor tipar */
// const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

console.log('Begin Obs$')
obs$.subscribe( 
    next => console.log('next:', next),
    null, //Ignora el error.
    () => console.log('Finished sequelize')
);
console.log('Finish obs$');