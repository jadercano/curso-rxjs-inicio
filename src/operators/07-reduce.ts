import { range, interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

//JS reduce
const numbers = [1,2,3,4,5];

const total = ( acc: number, curr: number ) => acc + curr;

const result = numbers.reduce(total, 0);
console.log(`total: ${result}`);

//rx reduce
interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(total)
)
.subscribe(observer);

