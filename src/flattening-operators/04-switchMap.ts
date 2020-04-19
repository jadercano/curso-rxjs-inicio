import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { GitHubUser } from '../interfaces/github-user.interface';
import { GitHubUsers } from '../interfaces/github-users.interface';

//References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//Helpers
const showUsers = (users: GitHubUser[]) => {
    orderList.innerHTML = '';
    console.log(users);
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See user';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    } 
}

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    mergeMap<string, Observable<GitHubUsers>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    pluck<GitHubUsers, GitHubUser[]>('items')
);//.subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target','value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);