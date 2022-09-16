import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import axios from 'axios';

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

    .w-100 {
      width: 100%;
    }
  `;

  @property({ type: Object }) person: any;

  async connectedCallback() {
    super.connectedCallback();
    this.getProfile();
  }

  async getProfile() {
    const { results } = (await axios.get('https://randomuser.me/api/')).data
    const { 0: firstPerson } = results;
    this.person = firstPerson;
    console.log(this.person)
  }

  getImage(photo: string) {
    return photo ? photo : image;
  }

  render() {
    const { name, picture } = this.person;
    const { first, last } = name;
    
    const fullName = `${first} ${last}`;

    return html`
    <link rel="stylesheet" href="https://atomic.tigocloud.net/sandbox/css/main-v1.1.0.min.css">
  
    <div class="container">
      <div class="ml-general-interest">
        <div class="at-containershadow-primary">
          <div class="content-img">
            <img src=${this.getImage(picture.large)} alt="Landscape" class="at-landscape-image w-100">
          </div>
          <div class="content-info">
            <h5 class="at-font-h5">${fullName}</h5>
            <p class="at-font-p">${this.person?.location.timezone.description}</p>
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
