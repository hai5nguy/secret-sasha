import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button } from '@material-ui/core'

import { Main, TopBar, ManageFields } from 'components'
import { loadAppData } from 'actions'

const styles = {
    root: {
    },
};

class Root extends React.Component {
    constructor() {
        super()
        loadAppData()
    }

    render() {
        const { activeView, classes } = this.props
        return (
            <div className={classes.root}>
                <TopBar />
                <Button>Mom</Button>
                <Button>Dad</Button>
                <Button>Shannon</Button>
                <Button>Hai</Button>
                <Button>Diem</Button>
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
