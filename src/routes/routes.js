import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

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

            </Route>
            <Route exact path=''>

            </Route>
        </Switch>

    )
}

