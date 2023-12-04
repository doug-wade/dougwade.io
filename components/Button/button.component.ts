import { defineComponent, html } from '@tybalt/core';
import { compose, oneOf, required } from '@tybalt/validator';

import css from './button.css';

export default defineComponent({
    name: 'dbw-button',
    css,
    props: {
        variant: {
            default: 'primary',
            validator: compose(oneOf(['primary', 'secondary']), required),
        },
        type: {
            default: 'button',
            validator: compose(oneOf(['button', 'submit']), required),
        }
    },
    render({ type, variant }) {
        return html`
            <button type="${type}" class="btn btn-${variant}">
                <dbw-typography tagName="span"><slot></slot></dbw-typography>
            </button>
        `;
    }
});