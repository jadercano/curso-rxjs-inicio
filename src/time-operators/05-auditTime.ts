import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x , y}) => ({ x, y})),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe(console.log);
