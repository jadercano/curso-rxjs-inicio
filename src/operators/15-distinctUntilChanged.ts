import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const numbers$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1);

numbers$.pipe(
    distinctUntilChanged() // ===
)
.subscribe(observer);

interface Character {
    name: string
}

const characters : Character[] = [
    { name: 'Character 1' },
    { name: 'Character 1' },
    { name: 'Character 1' },
    { name: 'Character 2' },
    { name: 'Character 2' },
    { name: 'Character 3' },
    { name: 'Character 3' },
    { name: 'Character 4' },
    { name: 'Character 5' },
    { name: 'Character 1' },
    { name: 'Character 2' },
    { name: 'Character 3' }
];

from(characters).pipe(
    distinctUntilChanged((x, y) => x.name === y.name)
)
.subscribe(observer);