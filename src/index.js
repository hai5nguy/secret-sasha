// import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'

import Root from 'components/Root'

import store from 'store'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[900],
        },
        secondary: {
            main: green[900],
        },
    },
})

/* globals */
window.HEIGHT_OF_FIELD = 60
window.TOUCH_AND_DRAG_OVER_DELAY = 100


const App = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Root />
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));
