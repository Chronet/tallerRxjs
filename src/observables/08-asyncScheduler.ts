import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const sayHello = () => console.log('Hi world');
const sayHello2 = nombre => console.log(`Hi ${ nombre }`);

/** TimeOut */
// asyncScheduler.schedule( sayHello );
// asyncScheduler.schedule( sayHello2, 2000, 'Jairo' );

/** Interval */
const subs = asyncScheduler.schedule( function(state){ 
    
    console.log('state', state);

    this.schedule( ++state, 1000 );

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );