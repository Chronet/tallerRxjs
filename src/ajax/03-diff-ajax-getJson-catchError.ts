import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbxxin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';


const manejaError = ( resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON( url );
// .pipe(
//     catchError( manejaError ) 
// );;
// const obs2$ = ajax(url).pipe(
//     catchError( manejaError )
// );;

// obs$.subscribe( data => console.log('getJson: ', data) );
// obs2$.subscribe( data => console.log('ajax: ', data) );
obs$.pipe(
    catchError( manejaError ) // Importante, manejando el error como esta aqui, aunque saltara un metodo del error, tambien se ejecutara el next, cosa que no pasaba con los casos anteriores
).subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs', err),
    complete: () => console.log('complete')
})