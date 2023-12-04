import { defineComponent, html } from '@tybalt/core';

export default defineComponent({
    name: 'dbw-jobs-list',
    setup() {
        const jobs = [
            {
                name: 'Skilljar'
            },
            {
                name: 'Indeed'
            },
            {
                name: 'Amazon'
            },
            {
                name: 'Epic'
            }
        ];

        return {
            jobs
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