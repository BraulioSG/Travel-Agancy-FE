//styles
import './InputField.scss';

function InputField(props) {
    const { name, placeholder, type, label, required } = props;
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
                />
            </div>
        </>
    );
}

export default InputField;
