import { startWith, endWith } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//References
const loadingDiv = document.createElement('div');
loadingDiv.className = 'loading';
loadingDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(resp => {
    if(resp === true) {
        body.append(loadingDiv);
    }
    else{
        console.log(resp)
        document.querySelector('.loading').remove();
    }
});
