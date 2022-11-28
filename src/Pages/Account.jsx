//tools
import { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'wouter';
//styles
import './Account.scss';

//components
import Navbar from '../Components/Navbar';
import InputField from '../Components/InputField';
import Footer from '../Components/Footer';

function Account(props) {
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(true);
    const [_location, setLocation] = useLocation();
    useEffect(() => {}, []);

    if (loading) return <h1>Loading...</h1>;
    if (!logged) return <Redirect to="/login" />;

    let { name, lastname, email, paymentMethdos } = {
        name: 'Braulio',
        lastname: 'doe',
        email: 'johndoe@email.com',
    };

    const handleDelete = evt => {
        evt.preventDefault();
        const condition = `yo ${name} ${lastname}, deseo borrar mi cuenta`;
        const input = window.prompt(
            `Para borrar tu cuenta, escribre\n${condition}`
        );

        if (input === condition) setLocation('/');
        console.log(input, condition);
    };
    return (
        <>
            <Navbar />
            <section className="account-section" style={{ marginTop: '20px' }}>
                <div className="account-section-content account-info">
                    <span className="account-badge">
                        <span className="account-badge-letter">
                            {name[0].toUpperCase()}
                        </span>
                    </span>
                    <div className="account-general-information">
                        <h2>My Account</h2>
                        <span className="account-name">
                            Name:
                            <span>
                                {name} {lastname}
                            </span>
                        </span>
                        <span className="account-email">
                            Mail: <span>{email ?? ''}</span>
                        </span>
                    </div>
                </div>
                <hr />
            </section>
            <section className="account-section">
                <h2 className="account-section-title">Mi Cuenta</h2>
                <hr />
                <div className="account-update-container">
                    <div className="account-update-form">
                        <fieldset className="account-update-name">
                            <InputField
                                name="fname"
                                label="Nombre"
                                value={name}
                            />
                            <InputField
                                name="fname"
                                label="Apellido"
                                value={lastname}
                            />
                        </fieldset>
                        <InputField
                            name="email"
                            label="Correo Electronico"
                            value={email}
                        />
                    </div>
                </div>
            </section>
            <section className="account-section">
                <h2 className="account-section-title">Métodos de Pago</h2>
                <hr />
            </section>

            <section className="account-section">
                <h2 className="account-section-title">Seguridad</h2>
                <hr />
                <div className="account-security-section">
                    <div className="account-update-password">
                        <h3>Change Password</h3>
                        <InputField label="Contraseña Actual" />
                        <InputField label="Nueva Contraseña" />
                        <InputField label="Confirmar Contraseña" />
                    </div>
                    <div className="account-delete-account">
                        <h3>Delete Account</h3>
                        <p>
                            Una vez borrada la cuenta, no se podrá restaurar y
                            se perderan todos los datos que almacenaba.
                        </p>
                        <InputField label="Nos gustaría saber el porqué :(" />
                        <button
                            className="account-delete-button"
                            onClick={handleDelete}
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                            Borrar
                        </button>
                    </div>
                </div>
            </section>
            <div className="account-save-changes">
                <button className="account-save-changes-button">
                    <span className="material-symbols-outlined">save</span> Save
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Account;
