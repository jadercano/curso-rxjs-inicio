import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('Completed!')    
}

const url = 'https://httpbinXX.org/delay/1';

const handleAjaxError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of([]);
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(handleAjaxError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(handleAjaxError)
// );

const obs$ = ajax.getJSON(url).pipe(
    catchError(handleAjaxError)
);
const obs2$ = ajax(url);

//obs2$.subscribe(data => console.log('ajax:',data));
obs$.subscribe(observer);
