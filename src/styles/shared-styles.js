/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px 40px;
        padding: 16px;
        color: #757575;
        background-color: #f2f0f0;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      h1 {
        margin: 16px 0;
        color: #000;
        font-size: 22px;
      }

      h4 {
        color: #000;
        font-size: 18px;
        margin-bottom: 10px;
      }

      p {
        color: #000;
        margin-top: 10px;
        font-family: "Open Sans";
      }

      form {
        width: 100%;
      }

      form input {
        display: block;
        width: 80%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
        float: left;
      }

      fieldset {
        border-color: #50d37d;
        border-right: none;
        border-bottom: none;
        border-top: none;
      }

      label {
        color: #000;
        margin-right: 10px;
        width: 40px;
        font-size: 14px;
        font-weight: 500;
      }

      .dropdowns {
        width: 100%;
        margin: 30px 0 30px 0;
        height: 40px;
        /* float: left; */
      }

      /* DROPDOWN  */
      select {
        width: 40%;
        border: solid 1px rgba(80, 211, 125, 0.4);
        height: 35px;
        font-size: 14px;
        padding: 5px;
        background: #f7f7f7;
        float: right;
        margin-right: 20px;
        font-family: "Exo", sans-serif;
      }

      select:hover {
        background: rgba(80, 211, 125, 0.4);
        border: solid 1px rgba(80, 211, 125, 0.4);
        cursor: pointer;
      }

      /* select:valid {
        background: rgb(39, 201, 255);
      } */

      button {
        width: 100%;
        height: 40px;
        font-size: 16px;
        font-family: "Exo", sans-serif;
        background: rgba(80, 211, 125, 0.4);
        border: solid 1px rgba(80, 211, 125, 0.4);
        }

        button:hover {
          background: rgb(80, 211, 125);
          border: solid 1px rgb(80, 211, 125);
          cursor: pointer;
        }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
