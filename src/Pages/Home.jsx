//styels
import './Home.scss';

//components
import Navbar from '../Components/Navbar';
import BannerScroll from '../Components/BannerScroll';

function Home() {
    return (
        <>
            <Navbar />
            <BannerScroll />
            <h1>Hello world</h1>
        </>
    );
}

export default Home;
