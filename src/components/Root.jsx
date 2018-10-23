import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, Typography } from '@material-ui/core'

// import { Main, TopBar, ManageFields } from 'components'
import { loadAppData } from 'actions'

import NameButton from './NameButton'
import TopBar from './TopBar'

const styles = {
    root: {
        height: '100%',
        maxWidth: 375,
        margin: '0 auto',
        background: '#cef3de',
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 5,
    },

};

const names = ['Mom', 'Dad', 'Shannon', 'Hai', 'Diem', 'Adam', 'Kieu', 'Paul', 'Thu', 'Derik', 'Michael']

class Root extends React.Component {
    constructor() {
        super()
        loadAppData()
    }

    render() {
        const { activeView, classes: c } = this.props
        return (
            <div className={c.root}>
                <TopBar />
                <div className={c.buttonContainer}>
                    { names.map((n, i) => (<NameButton key={i} name={n} nameClick={() => {}} />)) }
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    const { activeView } = state.ui
    return { activeView }
}

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(Root)
