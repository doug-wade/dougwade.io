import { defineComponent, html } from '@tybalt/core';

const jobs = [
    {
        name: 'Skilljar',
        url: ''
    },
    {
        name: 'Indeed',
        url: ''
    },
    {
        name: 'Amazon',
        url: ''
    },
    {
        name: 'Epic',
        url: ''
    }
];

export default defineComponent({
    name: 'dbw-jobs-list',
    setup() {
        const jobsLis = jobs.map((job) => {
            return html`
                <li>
                    <dbw-link href="${job.url}">${job.name}</dbw-link>
                </li>
            `;
        });

        return {
            jobsLis
        }
    },
    render({ jobsLis }) {
        return html`
            <dbw-typography variant="h3">Formerly of</dbw-typography>
            <ul>
                ${jobsLis.join('')} 
            </ul>
        `;
    }
});