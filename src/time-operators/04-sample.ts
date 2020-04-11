import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
)
.subscribe(console.log);

