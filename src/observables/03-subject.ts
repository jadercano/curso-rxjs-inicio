import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any>  = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error ),
    complete: () => console.info('completed!')
}   

const interval$ = new Observable<number>( subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Interval disposed!');
    }
});

// 1- Multiple casting
// 2- It's an observer too
// 3- It has Next, error, complete as well
const subject$ = new Subject();
const subs = interval$.subscribe(subject$);

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

// const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );

// const subs1 = interval$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = interval$.subscribe( rnd => console.log('subs2', rnd) );

// subs1.add(subs2);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subs.unsubscribe();
}, 3500);