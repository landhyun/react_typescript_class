import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from './route/Coins';
import Coin from './route/Coin';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin/>
                </Route>
                <Route path="/">
                    <Coins/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
} 
export default Router;