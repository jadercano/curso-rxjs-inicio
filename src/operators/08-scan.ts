import { from } from 'rxjs';
import { tap, reduce, scan, pluck } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

//JS reduce
const numbers = [1,2,3,4,5];

const total = ( acc: number, curr: number ) => acc + curr;

const result = numbers.reduce(total, 0);
console.log(`total: ${result}`);

//rx reduce and scan
from(numbers).pipe(
    scan(total, 0)
)
.subscribe(console.log);

from(numbers).pipe(    
    reduce(total, 0)
)
.subscribe(console.log);

interface User {
    id?: string,
    authenticated?: boolean,
    token?: string,
    age?: number
}

const user : User[] = [
    { id: "Jader", authenticated: false, token: null },
    { id: "Jader", authenticated: true, token: 'ABC' },
    { id: "Jader", authenticated: true, token: 'ABC123' },
    { id: "Jader", authenticated: false, token: null }
]

const userState$ = from(user).pipe(
    scan<User>((acc, cur) => {
        return { ...acc, ...cur }
    }, {age: 34 })
);

const id$ = userState$.pipe(
    pluck('id')
).subscribe(console.log);