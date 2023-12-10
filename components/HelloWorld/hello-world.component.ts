import { defineComponent, html } from '@tybalt/core';
import { compose, string, required } from '@tybalt/validator';

import css from './hello-world.css';

export default defineComponent({
    name: 'hello-world',
    css,
    props: { name: { validator: compose(string(), required) } },
    render({ name }) {
        return html`<dbw-typography variant="h1" class="hello-world">Welcome to ${name}!</dbw-typography>`;
    }
});
