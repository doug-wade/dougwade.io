import { defineComponent, html } from '@tybalt/core';
import { boolean, compose, oneOf, string, required } from '@tybalt/validator';

import css from './text-input.css';

export default defineComponent({
    name: 'dbw-text-input',
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
            validator: boolean
        },
        type: {
            default: 'text',
            validator: oneOf(['text', 'email'])
        }
    },
    render({ name, label, required, type }) {
        return html`
            <label>
                <dbw-typography variant="body">${label}:</dbw-typography>
                <input required="${required}" type="${type}" name="${name}"></input> 
            </label>
        `;
    }
});