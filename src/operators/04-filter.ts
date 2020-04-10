import { from, fromEvent } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

// const source$ = range(1, 10).pipe(
//     filter(val => val % 2 === 1)
// );

// const source$ = range(1, 10).pipe(
//     filter((val, index) => {
//         console.log(`index: ${index}`);    
//         return val % 2 === 1
//     })
// );

interface Character {
    type: string,
    name: string
}

const characters : Character[] = [
    {
        type: 'Hero',
        name: 'Batman'
    },
    {
        type: 'Hero',
        name: 'Robin'
    },
    {
        type: 'Villain',
        name: 'Joker'
    }
]

const source$ = from(characters).pipe(
    filter((val, index) => {
        return val.type === 'Hero'
    }),
    pluck('name')
);

source$.subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
).subscribe(observer);