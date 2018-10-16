/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class Stap5 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <!-- <div class="circle">3</div> -->
        <h1>Geestelijke Gezondheid</h1>

        <!-- stap/card 5 -->

          <!-- <div class="circle">2</div> -->
          <form>
            <fieldset>
              <!-- <legend>Geestelijke gezondheid</legend> -->

              <div class="dropdowns">
                <label>Als slachtoffer bekend bij slachtofferhulp</label>
                <select name="slachtofferhulp">
                <option value="">Ja</option>
                <option value="">Nee</option>
                </select>
              </div>

            </fieldset>
          </form>

        <!-- <my-prev-arrow></my-prev-arrow>
        <my-next-arrow></my-next-arrow> -->

      </div>
    `;
  }
}

window.customElements.define('my-stap5', Stap5);
