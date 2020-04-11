import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
)
.subscribe(observer);
