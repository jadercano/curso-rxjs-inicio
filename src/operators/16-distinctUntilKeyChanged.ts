import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

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
    distinctUntilKeyChanged('name')
)
.subscribe(observer);