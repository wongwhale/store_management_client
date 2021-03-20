import React from 'react'
import {render} from 'react-dom'
import AppRouter from './src/screens'
import './src/style'
import 'bulma'

const App = () => {
    return (
        <>
            <AppRouter />
        </>
    )
}

render(<App /> , document.getElementById('app') )