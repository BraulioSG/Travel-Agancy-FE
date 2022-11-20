import './App.scss';
import { Switch, Route, Redirect } from 'wouter';

//* PAGES
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
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
