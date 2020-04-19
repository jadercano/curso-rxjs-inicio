import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//Helper
const httpLoginRequest$ = (loginInfo) => ajax.post('https://reqres.in/api/login?delay=1', loginInfo).pipe(
    pluck('response','token'),
    catchError(err => of('Has ocurred an error'))
);

//Create Form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//Settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Submit';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    //mergeMap(httpLoginRequest$)
    //switchMap(httpLoginRequest$)
    exhaustMap(httpLoginRequest$)
);

submitForm$.subscribe( token => console.log(token));