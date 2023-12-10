import { defineComponent, html } from "@tybalt/core";

const articles = [
    {
        name: 'Building the Gulp Snyk plugin',
        url: 'https://snyk.io/blog/building-the-gulp-snyk-plugin/'
    },
    {
        name: 'Got Qualified. Built Confidence. Found a job.',
        url: 'https://blog.coursera.org/learner-story-got-qualified-built-confidence/'
    }
];

defineComponent({
    name: 'dbw-press-list',
    render() {
        return html`
            <dbw-typography variant="h3">In the press</dbw-typography>
            <ul>    
                ${articles.map(article => html`
                    <li>
                        <a href="${article.url}">${article.name}</a>
                    </li>
                `)}
            </ul>
        `;
    }
});
