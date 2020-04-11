import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    //take(1)
    tap(event => console.log(event.clientY)),
    // map(event => ({
    //     clientX: event.clientX,
    //     clientY: event.clientY
    // })),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(event => event.clientY >= 150)
);

click$.subscribe(observer);