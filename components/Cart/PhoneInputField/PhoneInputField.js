import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


const PhoneInputField = ({ name, value, country, label, onChange, className }) => {


    const [isFocused, setFocused] = useState(false);

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
        </div>
    );
};

export default PhoneInputField