import { defineComponent, html } from '@tybalt/core';
import { boolean, compose, oneOf, string, required } from '@tybalt/validator';
import { string as stringParser } from '@tybalt/parser';
import { derive, reactive } from "@tybalt/reactive";
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
        const id = uuid();

        const validator = compose(
            isRequired.value ? required() : null,
            type.value === 'email' ? emailValidator : null,
            string()
        );
        
        // Only show the error state once the field has been blurred
        // the first time.
        let hasRun = false;
        const hasBlurredClasses = reactive('');
        const blurHandler = () => {
            if (!hasRun) {
                hasBlurredClasses.value = 'has-blurred';
                hasRun = true;
            }
        };

        // Persist the value of the text input between renders
        const validClasses = reactive(isRequired ? 'invalid' : '');
        const value = reactive(valueProp.value);
        valueProp.addListener(valuePropUpdate => value.value = valuePropUpdate);
        const inputHandler = async (evt) => {
            evt.stopPropagation();

            const newValue = evt.target?.value;
            value.value = newValue;
            const validationResult = await validator.validate(value.value);
            validClasses.value = validationResult.passed ? '' : 'invalid';

            emit('change', { 
                value: newValue, 
                valid: validationResult.passed
            });
        };

        const wrapperClasses = derive([hasBlurredClasses, validClasses], ([h, v]) => {
            return `${h} ${v}`;
        });

        return {
            blurHandler,
            inputHandler,
            id,
            wrapperClasses,
            value,
        }
    },
    render({ 
        name, 
        label, 
        required, 
        type, 
        wrapperClasses, 
        blurHandler, 
        inputHandler, 
        value, 
        id
    }) {
        return html`
            <div class="dbw-text-input ${wrapperClasses}">
                <label for="${id}">
                    <dbw-typography variant="body">
                        ${label}:
                    </dbw-typography>
                </label>
                <input
                    id="${id}"
                    required="${required}" 
                    type="${type}" 
                    name="${name}" 
                    value="${value.value}"
                    @blur="${blurHandler}"
                    @input="${inputHandler}">
                </input> 
            </div>
        `;
    }
});
