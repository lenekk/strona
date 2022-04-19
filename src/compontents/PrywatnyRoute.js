import React from 'react'
import { Redirect, Route } from "react-router";
import { useLog } from "../contexts/LogContext";

const PrywatnyRoute = ({component: Component, ...rest}) => {

    const {user} = useLog()

    return (
      
        <Route
            {...rest}
            render={props => {
                return user ? <Component {...props}></Component> : <Redirect to='/'></Redirect>
            }}>
        </Route>
       
    )
} 

export default PrywatnyRoute
