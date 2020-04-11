import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, first, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop timer';
button.disabled = true;

document.querySelector('body').append(button);

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const counter$ = interval(1000).pipe(
);

const click$ = fromEvent<MouseEvent>(button, 'click').pipe(
    skip(1)
);

counter$.pipe(
    skip(10),
    tap(() => button.disabled = false),
    takeUntil(click$)
)
.subscribe(observer);