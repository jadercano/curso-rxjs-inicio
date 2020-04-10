import { of, from } from 'rxjs';

/*
*of = take arguments and generate a sequence
*from = array, promise, iterable, observable
*/

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

// const source$ = from([1,2,3,4,5,6]);
// const source$ = of(...[1,2,3,4,5,6]);

//const source$ = from('Jader');

// source$.subscribe(observer);

//Calling a rest service using fetch, rxjs has tis own ajax functions
// const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async(resp) => {
//     console.log(resp.url);
//     const data = await resp.json();
//     console.log(data);
    
// });

//Working with iterables
const myGenerator = function*(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const myIterable = myGenerator();
// for (let id of myIterable){
//     console.log(id);
// }
from(myIterable).subscribe(observer);
