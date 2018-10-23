import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, Typography } from '@material-ui/core'

import { Main, TopBar, ManageFields } from 'components'
import { loadAppData } from 'actions'

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
    nameButton: {
        width: '100%',
        maxWidth: 165,
        margin: 5,
        height: 100,
    },
    name: {
        color: 'white',
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
                    {
                        names.map((n, i) => (
                            <Button className={c.nameButton} variant="contained" color="secondary" key={i}>
                                <Typography className={c.name} variant="h5">{n}</Typography>
                            </Button>
                        ))
                    }
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
