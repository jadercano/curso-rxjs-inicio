import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const gretting = () => console.log('Saying hello!!!');
const grettingWithName = name => console.log(`Saying hello to ${name}!!!`);

// asyncScheduler.schedule(gretting, 2000);
// asyncScheduler.schedule(grettingWithName, 3000, 'Jader');

const subs = asyncScheduler.schedule(function(state){
    console.log(`State: ${state}`);
    this.schedule(state + 1, 1000);
}, 3000, 0);

//Cancel subscripcion
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);