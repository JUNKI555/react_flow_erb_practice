import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageFlowChart } from "../react/pages/PageFlowChart";

class FlowChartElement extends HTMLElement {
  connectedCallback() {
    const shadow = document.createElement('div');
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('type', 'text/css');
    linkElem.setAttribute('href', '../packs/js/lib/style.css');
    shadow.appendChild(linkElem);

    const mountPoint = document.createElement('div');
    shadow.appendChild(mountPoint);

    this.attachShadow({ mode: 'open' }).appendChild(shadow);
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<PageFlowChart />);
  }
}

customElements.define('flow-chart', FlowChartElement);
