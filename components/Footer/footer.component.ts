import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'dbw-footer',
    setup() {
        return {
            year: (new Date()).getFullYear()
        }
    },
    render({ year }) {
        return html`
            <footer>
                © ${year} Douglas Wade 
            </footer>
        `;
    }
});