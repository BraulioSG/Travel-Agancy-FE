//styels
import './Home.scss';

//components
import Navbar from '../Components/Navbar';
import BannerScroll from '../Components/BannerScroll';
import HomeSection from '../Components/HomeSection';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <BannerScroll />
            <HomeSection>
                <h1>Promociones</h1>
            </HomeSection>
            <Footer />
        </>
    );
}

export default Home;
