import { of, interval, forkJoin } from "rxjs";
import { take } from "rxjs/internal/operators/take";
import { delay } from "rxjs/operators";

const number$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(
    take(3)
);
const letters$ = of(...'abcde').pipe(
    delay(4000)
);

forkJoin(
    number$,
    interval$,
    letters$
);
//.subscribe(console.log);

forkJoin(
    number$,
    interval$,
    letters$
)
.subscribe(resp => {
    console.log('numbers:', resp[0]);
    console.log('interval:', resp[1]);
    console.log('letters:', resp[2]);
});

forkJoin({
    number$,
    interval$,
    letters$
})
.subscribe(resp => {
    console.log(resp);
    console.log('letters:', resp.letters$);
});

forkJoin({
    number: number$,
    interval: interval$,
    letter: letters$
})
.subscribe(resp => {
    console.log(resp);
    console.log('letters:', resp.letter);
});