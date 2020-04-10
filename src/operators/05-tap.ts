import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}


const source$ = range(1, 10).pipe(
    tap(val => console.log(`Before: ${val}`)),
    map(val => val * 10),
    tap(val => console.log(`After: ${val}`))
);

source$.subscribe(observer);