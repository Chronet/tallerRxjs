import { ajax } from 'rxjs/ajax';

const url = 'http://httpbin.org/delay/1';

// ajax.get( url, {
//     'mi-token': 'ABC123'
// });

// ajax.post( url, {
//     id: 1,
//     nobre: 'Jairo Eduardo'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );

// ajax.put( url, {
//     id: 1,
//     nobre: 'Jairo Eduardo'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nobre: 'Jairo Eduardo'
    }
}).subscribe( console.log );