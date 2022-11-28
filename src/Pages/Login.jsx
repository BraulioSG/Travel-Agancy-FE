//styles
import './Login.scss';

//components
import InputField from '../Components/InputField';
import { useState } from 'react';

function Login() {
    const [formSetup, setFormSetup] = useState('');
    const toggleForm = evt => {
        evt.preventDefault();
        if (formSetup === '') setFormSetup('login-form-show-signup');
        else setFormSetup('');
    };
    return (
        <>
            <div className="login">
                <h1 className="login-title">Aterrizar.com</h1>
                <div className="login-decoration">
                    <div className="login-curves">
                        <img src="/assets/curves.svg" alt="" />
                    </div>
                    <div className="login-plane">
                        <img src="/assets/icons/plane.png" alt="" />
                    </div>
                </div>
                <div className="login-form-container">
                    <div className={`login-form-scroll ${formSetup}`}>
                        <form className="login-form">
                            <h2>Inicia Sesión</h2>
                            <InputField
                                name="usuario"
                                type="text"
                                placeholder="johndoe"
                                required={true}
                                handler={() => {}}
                            />
                            <InputField
                                name="contraseña"
                                type="text"
                                placeholder="johndoe"
                                required={true}
                            />
                            <div className="login-form-buttons">
                                <button className="login-form-button-main">
                                    Ingresar
                                </button>
                                <button
                                    className="login-form-button-secondary"
                                    onClick={toggleForm}
                                >
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                        <form className="login-form">
                            <h2>Crear Cuenta</h2>
                            <InputField
                                name="email"
                                type="text"
                                placeholder="johndoe"
                                required={true}
                            />
                            <InputField
                                name="usuario"
                                type="text"
                                placeholder="johndoe"
                                required={true}
                            />
                            <InputField
                                name="contraseña"
                                type="text"
                                placeholder="johndoe"
                                required={true}
                            />
                            <div className="login-form-buttons">
                                <button className="login-form-button-main">
                                    Ingresar
                                </button>
                                <button
                                    className="login-form-button-secondary"
                                    onClick={toggleForm}
                                >
                                    Ya tengo Cuenta{' '}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
