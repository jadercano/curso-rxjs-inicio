import { fromEvent, of } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
);

click$.subscribe(observer);