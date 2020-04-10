import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')
    
}

const obsinterval$ = interval(1000);

//like an interval
//const obstimer$ = timer(2000, 1000);

//due date
const fiveSecondsMore = new Date();
fiveSecondsMore.setSeconds( fiveSecondsMore.getSeconds() + 5 )
const obstimer$ = timer(fiveSecondsMore);

console.log('Begin');

//obsinterval$.subscribe(observer);
obstimer$.subscribe(observer);

console.log('End');
