import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';

document.querySelector('body').append(button);

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const counter$ = interval(1000);
const click$ = fromEvent<MouseEvent>(button, 'click');

counter$.pipe(
    takeUntil(click$)
)
.subscribe(observer);