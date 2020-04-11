import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    throttleTime(3000)
)
// .subscribe(observer);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)