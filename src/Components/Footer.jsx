//tools
import { Link } from 'wouter';

//styles
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="footer">
                <h1 className="footer-title">Aterrizar.com</h1>
                <div className="footer-content">
                    <div className="footer-col">
                        <h2>Información</h2>
                        <Link href="">Acuerdos de Privacidad</Link>
                        <Link href="">Sobre Aterrizar.com</Link>
                    </div>
                    <div className="footer-col">
                        <h2>Navegación</h2>
                        <Link href="/">Inicio</Link>
                        <Link href="/account">Mi Cuenta</Link>
                        <Link href="/destinations">Destinos</Link>
                        <Link href="/promotions">Ofertas</Link>
                    </div>
                    <div className="footer-col">
                        <h2>Contacto</h2>
                        <a href="mailto:abc@abc.com">correo</a>
                        <Link href="/">Redes Sociales</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
