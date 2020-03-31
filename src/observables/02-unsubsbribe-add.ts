import { Observable, Observer } from 'rxjs'

const observer: Observer<any>  = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error ),
    complete: () => console.info('completed!')
}   

const interval$ = new Observable<number>(subs => {
    let number = 1;
    const interval = setInterval(() => {
        subs.next(number++);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.info('Interval disposed!')
    }
});

const subscription1 = interval$.subscribe(num => console.log('1- Num: ', num));
const subscription2 = interval$.subscribe(num => console.log('2- Num: ', num));
const subscription3 = interval$.subscribe(num => console.log('3- Num: ', num));

subscription1
    .add( subscription2 )
    .add( subscription3 );

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.info('Unsubscribed!');
}
, 3000);