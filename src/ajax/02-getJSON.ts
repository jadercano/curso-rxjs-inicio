import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://httpbin.org/delay/1';

const handleAjaxError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of([]);
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'ABC123'
});
obs$.subscribe(data => console.log('data:',data));