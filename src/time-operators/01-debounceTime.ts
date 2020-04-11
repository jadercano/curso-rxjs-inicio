import { from, fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, debounceTime, tap, pluck, distinct, distinctUntilChanged } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

// const click$ = fromEvent<MouseEvent>(document, 'click');

// click$.pipe(
//     tap(console.log),
//     debounceTime(3000)
// )
// .subscribe(observer);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)