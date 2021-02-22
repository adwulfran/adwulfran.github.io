import { HomeComponent }  from './components/home/home.component.js'
import HomeComponentHTML from './components/home/home.component.html';
import HomeComponentCss from './components/home/home.component.css';

import { ContactComponent } from './components/contact/contact.component.js';
import ContactComponentHTML from './components/contact/contact.component.html';
import ContactComponentCss from './components/contact/contact.component.css';

import { RealtimeComponent } from './components/realtime/realtime.component.js';
import RealtimeComponentHTML from './components/realtime/realtime.component.html';
import RealtimeComponentCss from './components/realtime/realtime.component.css';


// SINGLE PAGE APPLICATION'S ROUTES 
const Routes = [
    {
        'path': 'home-component', 'component': HomeComponent, 'template': [HomeComponentHTML, HomeComponentCss]
    },
    {
        'path': 'contact-component', 'component': ContactComponent, 'template': [ContactComponentHTML, ContactComponentCss]
    },
    {
        'path': 'realtime-component', 'component': RealtimeComponent, 'template': [RealtimeComponentHTML, RealtimeComponentCss]
    }
] 
function active(e) {
    for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
        document.getElementsByClassName('nav-link')[i].classList.remove("active")
    }
    e.classList.add('active')
}
global.active = active;

var hashStores = [];
window.onhashchange = function () {
    hashStores.push(window.location.hash)
    Routes.forEach(function (el, i) {
        if (window.location.hash === '#' + el.path) {
            var root = document.getElementById('root');
            root.innerHTML = `<`+el['path']+`>`+el['template'][0]+ `</`+el['path']+`>`;
            var style = document.createElement('style');
            style.innerHTML = el['template'][1];
            root.appendChild(style)
            customElements.get(el['path']) || customElements.define(el['path'], el['component']);
        }
    })
}

if (hashStores.length == 0) {
    hashStores.push(window.location.hash)
    Routes.forEach(function (el, i) {
        if (window.location.hash === '#' + el.path) {
            var root = document.getElementById('root');
            root.innerHTML = `<`+el['path']+`>`+el['template'][0]+ `</`+el['path']+`>`;
            var style = document.createElement('style');
            style.innerHTML = el['template'][1];
            root.appendChild(style)
            customElements.get(el['path']) || customElements.define(el['path'], el['component']);
        }
    })
}


