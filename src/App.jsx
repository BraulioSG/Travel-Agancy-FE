import './App.scss';
import { Switch, Route } from 'wouter';

//* PAGES
import Home from './Pages/Home';

function App() {
    return (
        <>
            <Switch>
                {/* DEFINES THE ROUTES*/}
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
