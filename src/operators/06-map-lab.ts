import { range, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum vitae magna id fringilla. Morbi eget erat eleifend, euismod massa vel, facilisis sem. Suspendisse ligula nisi, faucibus in dui at, vestibulum efficitur tortor. Morbi placerat ornare magna eu placerat. Pellentesque dapibus non nibh maximus mattis. Morbi non aliquet velit. Mauris ac ullamcorper elit. Praesent hendrerit ornare dignissim. Phasellus tincidunt eu elit at vehicula. Fusce quis vestibulum velit. Donec eget felis vel nulla euismod venenatis. Nam a sagittis est. Nullam condimentum, leo vitae viverra faucibus, ligula erat aliquet lorem, in tincidunt quam purus accumsan purus.
<br />
<br />
Mauris vel scelerisque enim, in dapibus tellus. Quisque blandit tristique consectetur. Pellentesque venenatis risus egestas velit sollicitudin, ut mollis odio dapibus. Aenean eu egestas tortor, quis luctus sapien. Phasellus sit amet mi lacus. Proin augue sapien, laoreet vitae lacinia malesuada, eleifend nec velit. Nam elementum augue a lectus aliquet, quis faucibus tellus ultrices. Ut aliquet elit leo, a egestas eros faucibus sed. Quisque elementum, lectus sed pretium efficitur, dolor nulla facilisis orci, non sagittis urna lorem sit amet libero. Suspendisse tempus commodo dictum. Nullam rutrum elementum nunc, sed venenatis ligula convallis in.
<br />
<br />
Duis finibus turpis eget lectus sagittis ultrices. Sed ornare faucibus congue. Praesent sed nulla id massa congue elementum. Sed pulvinar, est ut vulputate rutrum, ante sapien scelerisque felis, eu molestie quam mauris quis ex. Nullam hendrerit turpis at elit pellentesque, ut pretium sapien blandit. Praesent sed eleifend ante, a ultricies dui. Praesent lectus nulla, molestie vitae libero sit amet, blandit gravida sem. Donec placerat mauris eget euismod auctor.
<br />
<br />
Etiam sed felis in tortor fringilla lobortis. Mauris tempus nisl justo, vitae vehicula nisl rhoncus nec. Quisque iaculis nisi odio, luctus rutrum ipsum malesuada non. Integer maximus nunc nec lectus vehicula, non vulputate augue finibus. Nunc eget metus magna. Nulla blandit id mi at dignissim. Ut eget dui quam. Maecenas congue feugiat lectus vitae semper. Nulla posuere at magna non vulputate. Vestibulum placerat eros et eros bibendum semper.
<br />
<br />
Vestibulum condimentum aliquam efficitur. Nulla nisi nibh, facilisis et arcu sit amet, consectetur rhoncus dolor. Morbi cursus purus dictum neque sollicitudin tempor. Ut vulputate ligula ut ipsum hendrerit iaculis. Vivamus vitae condimentum nibh, in fermentum eros. Fusce eu congue nunc. Nullam venenatis ligula rutrum, dignissim eros non, tempor lectus. In elementum urna ut est pharetra, at viverra nisl laoreet. Donec vel sem vel neque eleifend eleifend.
`;

const body = document.querySelector('body');
body.append(text);

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completed!')    
}

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//Function
const calculateScrollPercentage = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    
    return (scrollTop/(scrollHeight-clientHeight))*100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    // map( event => calculateScrollPercentage(event))
    map(calculateScrollPercentage),
    tap(console.log)
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`
});