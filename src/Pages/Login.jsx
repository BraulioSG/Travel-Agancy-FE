//styles
import './Login.scss';

//components
import InputField from '../Components/InputField';

function Login() {
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
                    <form className="login-form">
                        <h2>LOGIN</h2>
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
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
