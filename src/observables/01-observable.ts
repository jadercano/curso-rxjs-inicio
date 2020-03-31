import { Observable, Observer } from 'rxjs'

const observer: Observer<any>  = {
    next: value => console.log('[obs] next: ', value),
    error: error => console.warn('[obs] error: ', error ),
    complete: () => console.info('[obs] completed!')
}   

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo!');
    
    subs.next('Hola');
    subs.next('Mundo!');

    //Throw an error
    // const a = undefined;
    // a.nombre = 'Anything';

    subs.complete();
    
    subs.next('Hola');
    subs.next('Mundo!');

});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('completed!')
// );