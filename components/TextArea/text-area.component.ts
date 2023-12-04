import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

export default defineComponent({
    name: 'dbw-text-area',
    props: {
        name: {
            validator: string,
        },
        label: {
            validator: compose(string, required)
        }

    },
    render({ name, label }) {
        return html`
            <label>
                <dbw-typography variant="body">${label}:</dbw-typography>
                <textarea name="${name}"></textarea> 
            </label>
        `;
    }
});