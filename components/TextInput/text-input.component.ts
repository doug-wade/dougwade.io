import { defineComponent, html } from '@tybalt/core';
import { boolean, compose, oneOf, string, required } from '@tybalt/validator';
import { string as stringParser } from '@tybalt/parser';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import css from './text-input.css';

const emailValidator = { 
    async validate(value) { return value.includes('@'); }
};

export default defineComponent({
    name: 'dbw-text-input',
    css,
    props: {
        name: {
            validator: string,
        },
        label: {
            validator: compose(string, required)
        },
        required: {
            default: false,
            validator: boolean
        },
        type: {
            default: 'text',
            validator: oneOf(['text', 'email'])
        },
        value: {
            default: '',
            validator: string,
            parser: stringParser,
        }
    },
    setup({ required: isRequired, type, value: valueProp }, { emit }) {
        debugger;
        const id = uuid();

        const validator = compose(...[
            isRequired.value ? required() : null,
            type.value === 'email' ? emailValidator : null,
            string()
        ].filter(v => !!v));
        
        // Only show the error state once the field has been blurred
        // the first time.
        let hasRun = false;
        const inputClasses = new BehaviorSubject('');
        const blurHandler = () => {
            if (!hasRun) {
                inputClasses.next('has-blurred');
                hasRun = true;
            }
        };

        // Persist the value of the text input between renders
        console.log('valueProp.value', valueProp.value);
        const value = new BehaviorSubject(valueProp.value);
        const changeHandler = async (evt) => {
            evt.stopPropagation();

            const newValue = evt.target?.value;
            value.next(newValue);
            const validationResult = await validator.validate(value.value);

            emit('change', { 
                value: newValue, 
                valid: validationResult.passed
            });
        };

        return {
            blurHandler,
            changeHandler,
            id,
            inputClasses,
            value
        }
    },
    render({ 
        name, 
        label, 
        required, 
        type, 
        inputClasses, 
        blurHandler, 
        changeHandler, 
        value, 
        id 
    }) {
        return html`
            <div>
                <label for=${id}>
                    <dbw-typography
                        tagName="span"
                        variant="body">
                            ${label}:
                    </dbw-typography>
                </label>
                <input 
                    class="${inputClasses}"
                    id="${id}"
                    required="${required}" 
                    type="${type}" 
                    name="${name}" 
                    value="${value}"
                    @blur="${blurHandler}"
                    @change="${changeHandler}">
                </input> 
            </div>
        `;
    }
});
