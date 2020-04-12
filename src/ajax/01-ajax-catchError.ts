import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const handleError = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}

const handleAjaxError = (err: AjaxError) => {
    console.warn('error:', err.message);
    return of([]);
}

const fetchPromise = fetch(url);

// fetchPromise
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error:', err) )

// fetchPromise
//     .then( handleError )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error:', err) )

ajax(url).pipe(
    //map(resp => resp.response)
    pluck('response'),
    catchError(handleAjaxError)
)
.subscribe(users => console.log('users:', users));