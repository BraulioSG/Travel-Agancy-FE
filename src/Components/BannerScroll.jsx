//tools
import { Link } from 'wouter';
//styles
import './BannerScroll.scss';

function BannerScroll() {
    return (
        <div className="banner">
            <div className="banner-scroll">
                <div className="banner-scroll-container">
                    <div className="banner-scroll-segment">
                        <img
                            src="/assets/banner/banner1.jpg"
                            alt="vacations"
                            className="banner-scroll-segment-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="banner-scroll-segment">
                        <img
                            src="/assets/banner/banner2.jpg"
                            alt="vacations"
                            className="banner-scroll-segment-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="banner-scroll-segment">
                        <img
                            src="/assets/banner/banner3.jpg"
                            alt="vacations"
                            className="banner-scroll-segment-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="banner-scroll-segment">
                        <img
                            src="/assets/banner/banner4.jpg"
                            alt="vacations"
                            className="banner-scroll-segment-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="banner-scroll-segment">
                        <img
                            src="/assets/banner/banner5.jpg"
                            alt="vacations"
                            className="banner-scroll-segment-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="banner-text">
                <p className="banner-text-heading">Queremos ser tu siguiente</p>
                <div className="banner-text-swap-text-container">
                    <div className="banner-text-swap-list">
                        <p className="banner-text-swap">Viaje de amigos</p>
                        <p className="banner-text-swap">Historia de amor</p>
                        <p className="banner-text-swap">Recuerdo familiar</p>
                        <p className="banner-text-swap">
                            Aventura por explorar
                        </p>
                        <p className="banner-text-swap">
                            Cultura por descubrir
                        </p>
                    </div>
                </div>
                <p className="banner-text-subheading">
                    Crea tu cuenta y empieza a vajar
                </p>
                <div className="banner-text-buttons">
                    <Link href="/" className="banner-text-buttons-signup">
                        Crear Cuenta
                    </Link>
                    <Link href="/" className="banner-text-buttons-login">
                        {' '}
                        ya tengo cuenta
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BannerScroll;
