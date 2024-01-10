import { defineComponent, html } from '@tybalt/core';
import { oneOf } from '@tybalt/validator';
import { derive } from '@tybalt/reactive';

import css from './typography.css';

const VARIANTS = {
    'h1': {
        name: 'h1',
        tagName: 'h1'
    },
    'h2': {
        name: 'h2',
        tagName: 'h2'
    },
    'h3': {
        name: 'h3',
        tagName: 'h3'
    },
    'body': {
        name: 'body',
        tagName: 'p'
    },
    'none': {
        name: 'none'
    }
};

const getDefaultTagName = (variant) => {
    return (VARIANTS[variant] || VARIANTS.body).tagName;
}

export default defineComponent({
    name: 'dbw-typography',
    props: {
        tagName: {
            validator: oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        },
        variant: {
            default: 'body',
            validator: oneOf(Object.keys(VARIANTS))
        }
    },
    css,
    setup({ variant, tagName }) {
        const derivedTagName = derive(tagName, ([tag]) => tag || getDefaultTagName(variant.value));

        return {
            tagName: derivedTagName,
            variant
        }
    },
    render({ tagName, variant }) {
        return html`<${tagName} class="${variant}"><slot></slot></${tagName}>`;
    }
});
