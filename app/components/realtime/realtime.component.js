import CandlestickComponentHTML from './candlestick/candlestick.component.html';
import CandlestickComponentCss from './candlestick/candlestick.component.css';
import { CandlestickComponent } from './candlestick/candlestick.component.js';

import OrderbookComponentHTML from './orderbook/orderbook.component.html';
import { OrderbookComponent } from './orderbook/orderbook.component.js';
import OrderbookComponentCss from './orderbook/orderbook.component.css';

export class RealtimeComponent extends HTMLElement {

    constructor() {

        super();
        var styles = [];
        styles.push(document.createElement('style'))
        styles[0].innerHTML = CandlestickComponentCss;
        document.getElementsByTagName('candlestick-component')[0].innerHTML = CandlestickComponentHTML;
        document.getElementsByTagName('candlestick-component')[0].appendChild(styles[0])
        customElements.get('candlestick-component') || customElements.define('candlestick-component', CandlestickComponent);

        styles.push(document.createElement('style'))
        styles[1].innerHTML = OrderbookComponentCss;
        document.getElementsByTagName('orderbook-component')[0].innerHTML = OrderbookComponentHTML;
        document.getElementsByTagName('orderbook-component')[0].appendChild(styles[1])
        customElements.get('orderbook-component') || customElements.define('orderbook-component', OrderbookComponent);

    }

}