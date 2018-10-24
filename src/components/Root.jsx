import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, Typography } from '@material-ui/core'

// import { Main, TopBar, ManageFields } from 'components'
import { loadAppData, openCard } from 'actions'

import GifterDialog from './GifterDialog'
import NameButton from './NameButton'
import TopBar from './TopBar'

const styles = {
    root: {
        // height: '100%',
        maxWidth: 375,
        margin: '0 auto',
        background: '#cef3de',
        paddingBottom: 20,
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

const names = ['Mom', 'Dad', 'Shannon', 'Hai', 'Diem', 'Adam', 'Kieu', 'Paul', 'Thu', 'Derik', 'Michael']

class Root extends React.Component {
    state = {
        selectedGifter: '',
    }

    nameClick = name => (e) => {
        console.log('nameClick', name)
        this.setState({
            selectedGifter: name,
        })
        // openCard(name)
    }

    onClose = () => {
        this.setState({
            selectedGifter: '',
        })
    }

    render() {
        const { classes: c } = this.props
        const { selectedGifter } = this.state
        return (
            <div className={c.root}>
                <TopBar />
                <Typography className={c.select_your_card} variant="h5" align="center">Select your card:</Typography>
                <div className={c.buttonContainer}>
                    { names.map((n, i) => <NameButton key={i} name={n} nameClick={this.nameClick} />) }
                </div>
                <GifterDialog open={selectedGifter !== ''} selectedGifter={selectedGifter} onClose={this.onClose} />
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
