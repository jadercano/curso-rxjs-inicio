import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('Completed!')    
}

const url = 'https://httpbin.org/delay/1';

const handleAjaxError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of([]);
}

// ajax.put(url, {
//     id: 1,
//     name: 'Jader'
// }, {
//     'my-token': 'ABC123' 
// })
// .subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        'my-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Jader'
    }
})
.subscribe(console.log);