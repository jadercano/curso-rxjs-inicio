import { fromEvent, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
);
//.subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';

input2.placeholder = 'password';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputString = (elem: HTMLElement) => 
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    );

combineLatest(
    getInputString(input1),
    getInputString(input2)
).subscribe(console.log);