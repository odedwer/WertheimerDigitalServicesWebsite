import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

const propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    type: PropTypes.oneOf([
        'textarea', 'text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local'
    ]),
    name: PropTypes.string,
    status: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    formGroup: PropTypes.string,
    hasIcon: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    hint: PropTypes.string,
    required: PropTypes.bool
};

const Input = ({
                   className,
                   children = null,
                   label = '',
                   labelHidden = false,
                   type = 'text',
                   name,
                   status = '',
                   disabled = false,
                   value = '',
                   formGroup = null,
                   hasIcon = null,
                   size = '',
                   placeholder = '',
                   rows = 3,
                   hint = null,
                   required = false,
                   ...props
               }) => {
    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleBlur = () => {
        setIsTouched(true);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);

        if (props.onChange) {
            props.onChange(e);
        }
    };

    const isInvalid = required && isTouched && inputValue.trim() === '';

    const wrapperClasses = classNames(
        (formGroup && formGroup !== '') && (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
        (hasIcon && hasIcon !== '') && `has-icon-${hasIcon}`
    );

    const classes = classNames(
        'form-input',
        size && `form-input-${size}`,
        status && `form-${status}`,
        className,
        {
            'input-invalid': isInvalid
        }
    );

    const Component = type === 'textarea' ? 'textarea' : 'input';

    return (
        <>
            {label && <FormLabel labelHidden={labelHidden} id={props.id}>{label}</FormLabel>}
            <div className={wrapperClasses}>
                <Component
                    {...props}
                    type={type !== 'textarea' ? type : null}
                    className={classes}
                    name={name}
                    disabled={disabled}
                    value={inputValue}
                    placeholder={placeholder}
                    rows={type === 'textarea' ? rows : null}
                    required={required}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {children}
            </div>
            {hint && <FormHint status={status}>{hint}</FormHint>}
        </>
    );
};

Input.propTypes = propTypes;

export default Input;
