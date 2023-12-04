import { defineComponent, html } from '@tybalt/core';
import { oneOf } from '@tybalt/validator';

export default defineComponent({
    name: 'dbw-typography',
    props: {
        variant: {
            validator: oneOf(['h1', 'h2', 'body'])
        }
    },
    render({ variant }) {
        return html`
            <t-switch condition="${variant}">
                <h1 slot="h1"><slot></slot></h1>
                <h2 slot="h2"><slot></slot></h2>
                <p slot="body"><slot></slot></div>
            </t-switch>
        `;
    }
});