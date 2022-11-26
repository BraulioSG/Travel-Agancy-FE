//styels
import './Home.scss';

//components
import Navbar from '../Components/Navbar';
import BannerScroll from '../Components/BannerScroll';
import HomeSection from '../Components/HomeSection';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';
import HomeCard from '../Components/HomeCard';

function Home() {
    return (
        <>
            <Navbar />
            <BannerScroll />
            <HomeSection>
                <h1>Promociones</h1>
            </HomeSection>
            <HomeSection>
                <h1>Why Us</h1>
                <div className="card-container">
                    <HomeCard title="seguridad" icon="verified_user">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est debitis quibusdam recusandae veritatis
                            veniam sunt quam. Eaque eius repudiandae numquam
                            vel! Laudantium quis pariatur iure? Temporibus
                            voluptatum recusandae minima aspernatur.
                        </p>
                    </HomeCard>
                    <HomeCard title="precios" icon="payments">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est debitis quibusdam recusandae veritatis
                            veniam sunt quam. Eaque eius repudiandae numquam
                            vel! Laudantium quis pariatur iure? Temporibus
                            voluptatum recusandae minima aspernatur.
                        </p>
                    </HomeCard>
                    <HomeCard title="Personalización" icon="family_restroom">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est debitis quibusdam recusandae veritatis
                            veniam sunt quam. Eaque eius repudiandae numquam
                            vel! Laudantium quis pariatur iure? Temporibus
                            voluptatum recusandae minima aspernatur.
                        </p>
                    </HomeCard>
                </div>
            </HomeSection>
            <HomeSection>
                <h1>FAQs</h1>
                <Accordion title="test">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis provident deleniti ipsum sint recusandae
                        voluptatem est sapiente illum beatae! Impedit, unde
                        sapiente voluptas obcaecati cumque vero quos eligendi
                        dolorem eum?
                    </p>
                </Accordion>
                <Accordion title="test">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis provident deleniti ipsum sint recusandae
                        voluptatem est sapiente illum beatae! Impedit, unde
                        sapiente voluptas obcaecati cumque vero quos eligendi
                        dolorem eum?
                    </p>
                </Accordion>
                <Accordion title="test">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis provident deleniti ipsum sint recusandae
                        voluptatem est sapiente illum beatae! Impedit, unde
                        sapiente voluptas obcaecati cumque vero quos eligendi
                        dolorem eum? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Consectetur corrupti laborum voluptate
                        dolor possimus facere cum rem aut, officiis
                        exercitationem repellat, itaque, fugiat soluta similique
                        voluptates ipsa. Accusantium, quis voluptatum!
                    </p>
                </Accordion>
                <Accordion title="test">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis provident deleniti ipsum sint recusandae
                        voluptatem est sapiente illum beatae! Impedit, unde
                        sapiente voluptas obcaecati cumque vero quos eligendi
                        dolorem eum?
                    </p>
                </Accordion>
            </HomeSection>
            <Footer />
        </>
    );
}

export default Home;
