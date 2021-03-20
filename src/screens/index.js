import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePage from './StorePage'
import CatagoryPage from './CatagoryPage'
import ProductPage from './ProductPage'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={StorePage} />
                    <Route path='/store/:id?' exact component={CatagoryPage} />
                    <Route path='/catagory/:id?' exact component={ProductPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter