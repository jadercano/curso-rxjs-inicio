import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUP_API_URL = 'https://api.github.com/users';
const GITHUP_USERS = 'jadercano';

forkJoin({
    user: ajax.getJSON(`${GITHUP_API_URL}/${GITHUP_USERS}`),
    repos: ajax.getJSON(`${GITHUP_API_URL}/${GITHUP_USERS}/repos123`).pipe(
        catchError( err => of([]))
    ),
    gists: ajax.getJSON(`${GITHUP_API_URL}/${GITHUP_USERS}/gists`),

})
.pipe(
    catchError( err => of(err.message))
)
.subscribe(console.log);