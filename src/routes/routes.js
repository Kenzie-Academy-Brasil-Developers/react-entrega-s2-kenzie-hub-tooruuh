import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

export default function Routes() {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))

        if (token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    return (

        <Switch>
            <Route exact path='/'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route exact path='/register'>
                <Register authenticated={authenticated}/>
            </Route>
            <Route exact path='/home'>
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>

    )
}

