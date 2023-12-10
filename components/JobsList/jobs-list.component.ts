import { defineComponent, html } from '@tybalt/core';

const jobs = [
    {
        name: 'Skilljar',
        url: 'https://www.skilljar.com/'
    },
    {
        name: 'Indeed',
        url: 'https://www.indeed.com/'
    },
    {
        name: 'Amazon',
        url: 'https://www.amazon.com/'
    },
    {
        name: 'Epic',
        url: 'https://www.epic.com/'
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
                ${jobsLis} 
            </ul>
        `;
    }
});
