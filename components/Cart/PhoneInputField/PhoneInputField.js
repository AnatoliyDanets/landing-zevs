import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getIn } from 'formik';


const PhoneInputField = ({ name, value, country, label, onChange, disabled, className }) => {


    const [isFocused, setFocused] = useState(false);
    // const isError = getIn(touched, name) && getIn(errors, name);
    // const errorStyle = isError ? 'error' : '';
    // const filledStyle = (isFocused || value) ? 'filled' : '';
    // const disabledStyle = disabled ? 'disabled' : '';

    const handleInputBlur = (e) => {
        setFocused(false);
        handleBlur(e);
    };

    const handleInputFocus = () => setFocused(true);

    // const onValueChange = (phoneNumber) => {
    //     setFieldValue(name, phoneNumber);

    //     if (onChange !== null) {
    //         onChange(phoneNumber);
    //     }
    // };

    return (
        <div className={`${className}`}>
            <PhoneInput
                placeholder="Enter phone number"
                name={name}
                value={value}
                onChange={onChange}
                country={country}
            />
            <label className="transition ml-10" htmlFor={name}>
                {label}
            </label>
            {/* <div className="flex h-5 items-end text-red-100 text-xs">
                {isError && getIn(errors, name)}
            </div> */}
        </div>
    );
};

export default PhoneInputField