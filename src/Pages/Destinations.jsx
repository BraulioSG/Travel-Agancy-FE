// Styles
import './Destinations.scss';

//Components
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Destinations() {
    return (
        <>
            <Navbar />
            <div className="destinations-banner">
                <h3>¿Cual será tu siguiente destino?</h3>
                <div className="destinations-input">
                    <input type="text" />
                    <span className="material-symbols-outlined">search</span>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Destinations;
