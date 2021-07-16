
import { LandingPage } from "./pages/LandingPage";
import AppStyles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";


export function App() {
    return <Router>
        <header>
        <Link to="/">
            <h1 className={AppStyles.tituloPrincipal}>¡Buscador de películas!</h1>
        </Link>
        </header>
        <main>
        <Switch>
        <Route exact path="/movies/:movieId">
            <MovieDetails />
        </Route>
        <Route exact path="/">
            <LandingPage />
        </Route>
        </Switch>
        </main>
    </Router>
}