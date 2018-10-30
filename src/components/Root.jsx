import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles, Typography } from '@material-ui/core'

import init from 'actions/init'

import GifterDialog from './GifterDialog'
import GifterCard from './GifterCard'
import TopBar from './TopBar'

const styles = {
    root: {
        maxWidth: 415,
        margin: '0 auto',
        background: '#cef3de',
        paddingBottom: 20,
        width: '100%',
    },
    select_your_card: {
        color: 'green',
        marginTop: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 5,
    },
};

class Root extends React.Component {
    constructor() {
        super()
        init()
    }

    render() {
        const { classes: c, gifters } = this.props
        return (
            <div className={c.root}>
                <TopBar />
                <Typography className={c.select_your_card} variant="h5" align="center">Select your card:</Typography>
                <div className={c.buttonContainer}>
                    { gifters.map((g, i) => <GifterCard key={i} gifter={g} />) }
                </div>
                <GifterDialog />
            </div>

        )
    }
}

const mapStateToProps = state => ({
    gifters: state.gifters,
})

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(Root)
