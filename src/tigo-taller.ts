import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tigo-taller")
export class TigoTaller extends LitElement {
  @property({ type: String }) name = "World";

  render() {
    return html`
    <h1>Hello, ${this.name}!</h1>
    <button class="at-button-primary">Call to action is really good</button>
    `;
  }
}
