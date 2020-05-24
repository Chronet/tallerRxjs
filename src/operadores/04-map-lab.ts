import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus, orci eget aliquam ultricies, est ex hendrerit mi, non aliquam nisl erat in sem. Morbi consectetur tellus ante, eget mollis tortor varius vitae. Duis mollis tempus consectetur. Mauris scelerisque orci sit amet enim vehicula tincidunt. Aliquam ex arcu, aliquam ut condimentum id, semper id erat. Sed porta eros ex, id malesuada est cursus eget. Pellentesque iaculis nunc mi, a blandit odio semper vel. Pellentesque efficitur at orci id auctor. Mauris finibus enim et orci porta interdum. Nunc id blandit velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Aliquam ac ex massa. Fusce odio ex, maximus pulvinar odio vel, aliquet semper felis. Curabitur non venenatis lorem, sed condimentum magna. Curabitur libero massa, elementum vitae nisi nec, varius tempus nulla. In hac habitasse platea dictumst. Sed et nisi vitae enim tristique congue. Nullam in quam sed ligula malesuada sagittis at sed purus. Donec ultricies felis elit, non rhoncus massa luctus vitae. Nunc mollis sollicitudin orci, a facilisis quam iaculis quis. Sed libero risus, dignissim quis placerat at, efficitur vitae massa. Nam sit amet leo varius, dictum est eu, fermentum mi. Cras ac mollis ante. Fusce sagittis venenatis mi, ac tempor risus. Maecenas ullamcorper eleifend congue. Vivamus sodales faucibus luctus.
<br/><br/>
Aliquam erat volutpat. In commodo, lacus in euismod faucibus, neque erat malesuada elit, interdum venenatis lacus risus vitae magna. Proin placerat auctor finibus. Sed fermentum enim turpis, vel pretium sapien dignissim ut. In hendrerit eros nulla. Aliquam dictum erat mauris, a laoreet magna posuere ac. Vestibulum tristique erat in ultrices varius. Pellentesque ut tortor et magna auctor suscipit a non ante. Praesent nibh lacus, auctor ut ex ac, dictum malesuada sem. Maecenas pharetra condimentum velit sed malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec facilisis enim sapien, nec blandit ligula dictum eget. Quisque placerat mi at auctor aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis lobortis facilisis dolor non iaculis. Ut nec commodo risus, vel imperdiet est. Praesent vestibulum pulvinar leo. Vestibulum quis faucibus augue. Proin aliquet suscipit enim, sit amet consequat mi feugiat sit amet. Etiam dapibus lorem vel elementum venenatis. Ut ligula mauris, consectetur lacinia odio vel, congue scelerisque enim. Aenean ut tempor purus. Nulla viverra lectus sodales ligula mattis, a tincidunt arcu vestibulum.
<br/><br/>
Nam tempus eu nisi ac efficitur. Vivamus sagittis tortor id diam auctor volutpat. Praesent tempus mollis metus, eu elementum massa consectetur sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam consectetur porttitor dui sit amet tristique. Morbi a lacus eget nulla dignissim mattis. Morbi quis porta nisl. `;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
/**
 * esta funcion hace una decostruccion en el document, para solo tomar
 * los valores que nos interesan, !OJO
 */
const calcularPorcentajeScroll = ( event ) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log({scrollTop, scrollHeight, clientHeight});
    return (scrollTop / (scrollHeight - clientHeight))*100;
}


// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje}%`

})