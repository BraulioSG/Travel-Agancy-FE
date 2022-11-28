//styles
import { useState } from 'react';
import './InputField.scss';

function InputField(props) {
    const { name, placeholder, type, label, required, value } = props;

    const [inputValue, setInputValue] = useState(value ?? '');
    const handleChange = evt => {
        evt.preventDefault();
        setInputValue(evt.target.value);
    };
    return (
        <>
            <div className="input-field">
                <label className="input-label" htmlFor={name}>
                    {label ?? name}
                    <span>{required ? '*' : ''}</span>
                </label>
                <input
                    className="input-input"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

export default InputField;
