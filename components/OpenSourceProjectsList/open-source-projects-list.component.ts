import { defineComponent, html } from "@tybalt/core";

const projects = [
    { 
        name: 'Tybalt',
        url: 'https://github.com/doug-wade/tybalt',
        description: 'A toolkit for writing web components. This site is written using Tybalt! Its a fun project, but you should probably use lit.'
    },
    {
        name: 'gulp-snyk',
        url: 'https://github.com/doug-wade/gulp-snyk',
        description: 'A build plugin for dependency vulnerability auditing. Now deprecated, it had its moment.'
    },
    {
        name: 'itscalledsoccer',
        url: 'https://github.com/American-Soccer-Analysis/itscalledsoccer-js',
        description: "An api client for fetching data from the American Soccer Analysis apis. A passion project for me."
    },
    {
        name: 'generator-koa-react',
        url: 'https://github.com/doug-wade/generator-koa-react',
        description: 'A project scaffolding tool from my time working on koa, this was an early way to set up react projects.'
    },
    {
        name: 'react-server-styled-components',
        url: 'https://github.com/doug-wade/react-server-styled-components',
        description: 'A collaboration from my time at React Netherlands while I was working on react-server, this was a proof of concept.'
    },
    {
        name: 'dougwade.io',
        url: 'https://github.com/doug-wade/dougwade.io',
        description: 'The code for this website, which is written in Tybalt, my open-source web components framework (see above).'
    }
];

export default defineComponent({
    name: 'dbw-open-source-projects-list',
    render({ data }) {
        return html`
            <dbw-typography variant="h3">Worked on</dbw-typography>
            <ul>
                ${projects.map(project => html`
                    <li>
                        <a href=${project.url}>${project.name}</a>
                        <p>${project.description}</p>
                    </li>
                `)} 
            </ul>
        `;
    }
});
