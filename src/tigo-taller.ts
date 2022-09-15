import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import image from '../16_9-imagen-landscape.png'

@customElement("tigo-taller")
export class TigoTaller extends LitElement {
  static styles = css`
    :host {
      margin: 0 auto;
      display: grid;
      width: 50%;
      place-items: center;
    }
  `;


  render() {
    return html`
    <link rel="stylesheet" href="https://atomic.tigocloud.net/sandbox/css/main-v1.1.0.min.css">
  
    <div class="container">
      <div class="ml-general-interest">
        <div class="at-containershadow-primary">
          <div class="content-img">
            <img src=${image} alt="Landscape" class="at-landscape-image">
          </div>
          <div class="content-info">
            <h5 class="at-font-h5">Llámanos gratis</h5>
            <p class="at-font-p">a la Línea <strong>01 8000 41 51 97</strong> desde teléfonos fijos y móviles.</p>
            <div class="content-button">
              <button class="at-button-tertiary">Ir al centro de ayuda</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  `;
  }
}
