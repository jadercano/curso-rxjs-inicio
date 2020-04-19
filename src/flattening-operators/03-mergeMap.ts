import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";


const letters$ = of(...'abcde');

letters$.pipe(
    mergeMap(letter => interval(1000).pipe(
        map(i => letter + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log(val),
//     complete: () => console.log('Completed')
// });

const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log);