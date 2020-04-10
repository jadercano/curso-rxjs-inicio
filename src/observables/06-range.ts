import { of, range, asyncScheduler } from 'rxjs';

//const src$ = of(1,2,3,4,5);
const src$ = range(1, 100, asyncScheduler);

console.log('Begin');

src$.subscribe(console.log);

console.log('End');