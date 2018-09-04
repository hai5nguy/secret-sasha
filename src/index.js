// import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'

import Button from '@material-ui/core/Button'
import classNames from 'classnames'

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'

// import { Provider } from 'react-redux';
// import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';

// import './manifest.json'


// import Routes from './app-routes';
// import './_Styles/Index.scss';


// import store from './Store';

// const App = () => (
//     <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <Provider store={store}>
//             <Routes />
//         </Provider>
//     </MuiThemeProvider>
// );

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        overscrollBehavior: 'contain',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'green',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
};

const App = ({ classes }) => (
    <div className={classNames(classes.container)}>
        yoooo2
        {/* <Button className={classNames(classes.root)} variant="contained" color="primary">
            Hello World
        </Button> */}
        <TextField
            id="name"
            label="Name"
            //   className={classes.textField}
            value="blah"
            //   onChange={this.handleChange('name')}
            margin="normal"
        />
        <TextField
            id="name"
            label="Name"
            //   className={classes.textField}
            value="blah"
            //   onChange={this.handleChange('name')}
            margin="normal"
        />
        <TextField
            id="name"
            label="Name"
            multiline
            //   className={classes.textField}
            // value="blah"
            //   onChange={this.handleChange('name')}
            margin="normal"
        />
        <Button className={classNames(classes.root)} variant="contained" color="primary">
            Hello World
        </Button>
    </div>
)

const StyleApp = withStyles(styles)(App);

ReactDOM.render(<StyleApp />, document.getElementById('app'));
