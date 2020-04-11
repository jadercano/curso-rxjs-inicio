import { from, of } from 'rxjs';
import { take } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const numbers$ = of(1,2,3,4,5).pipe(
    take(3)
);

numbers$.subscribe(observer);