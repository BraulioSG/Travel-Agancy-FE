import './App.scss';
import { Switch, Route, Redirect } from 'wouter';
import { useEffect } from 'react';
import AOS from 'aos'; //animate on scroll
import 'aos/dist/aos.css'; //animate on scroll css

//* PAGES
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Switch>
                {/* DEFINES THE ROUTES*/}
                <Route path="/" component={Home} />
                <Route path="/404" component={NotFound} />

                {/* if path not found then redirect */}
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
