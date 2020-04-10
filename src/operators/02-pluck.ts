import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

// const source$ = range(1, 10).pipe(
//     map<number, number>(val => val * 10)
// );
// source$.subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    //map<KeyboardEvent, string>(val => val.code)
    pluck('code')
);

keyUpCode$.subscribe(val => console.log(`map: ${val}`));