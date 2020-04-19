import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { debounceTime, map } from 'rxjs/operators';

//References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map(event=> {
        const text = event.target['value'];
        return ajax.getJSON(`https://api.github.com/users/${text}`);        
    })
).subscribe(resp => {
    resp.subscribe(console.log)
});

//The problem is that we have more than one observables chained/nested