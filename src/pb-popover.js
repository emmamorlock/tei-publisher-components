import { LitElement, html, css } from 'lit-element';
import { pbMixin } from './pb-mixin.js';
import '@polymer/paper-dialog';
import '@polymer/paper-tooltip';
import '@polymer/paper-button';

/**
 * Show a popover. If property `persistent` is true, a dialog will be shown
 * on click. Otherwise display a tooltip on mouseover.
 *
 * @customElement
 * @polymer
 * @demo demo/pb-popover.html
 * @appliesMixin pbMixin
 */
export class PbPopover extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            persistent: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.persistent = false;
    }

    _open(ev) {
        ev.preventDefault();

        if (this.persistent) {
            const dialog = this.shadowRoot.getElementById('dialog');
            dialog.positionTarget = this.shadowRoot.getElementById('link');
            dialog.open();
        }
    }

    render() {
        return html`
            <a id="link" href="#" @click="${this._open}"><slot></slot></a>
            ${this.persistent ? PbPopover._renderDialog() : PbPopover._renderTooltip()}
        `;
    }

    static _renderTooltip() {
        return html`
            <paper-tooltip for="link" position="bottom" fit-to-visible-bounds="fit-to-visible-bounds">
                <slot name="content"></slot>
            </paper-tooltip>
        `;
    }

    static _renderDialog() {
        return html`
            <paper-dialog id="dialog" dynamic-align no-overlap horizontal-align="left" vertical-align="top">
                <h2><slot name="title"></slot></h2>
                <paper-dialog-scrollable>
                    <slot name="content"></slot>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        Close
                    </paper-button>
                </div>
            </paper-dialog>
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }
        `;
    }
}
customElements.define('pb-popover', PbPopover);