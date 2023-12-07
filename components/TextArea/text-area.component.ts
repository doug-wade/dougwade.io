import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

import css from './text-area.css';

export default defineComponent({
    name: 'dbw-text-area',
    css,
    props: {
        name: {
            validator: string,
        },
        label: {
            validator: compose(string, required)
        },
        required: {
            default: false,
        }
    },
    render({ name, label, required }) {
        return html`
            <label>
                <dbw-typography variant="body">${label}:</dbw-typography>
                <textarea required="${required}" name="${name}"></textarea> 
            </label>
        `;
    }
});