import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, Typography } from '@material-ui/core'

import { loadAppData } from 'actions'

const styles = {
    root: {
        width: '100%',
        maxWidth: 165,
        margin: 5,
        height: 100,
    },
    name: {
        color: 'white',
    },
};

class NameButton extends React.Component {
    constructor() {
        super()
        loadAppData()
    }

    render() {
        const { classes: c, name, nameClick } = this.props
        return (
            <Button className={c.root} variant="contained" color="secondary" onClick={nameClick(name)}>
                <Typography className={c.name} variant="h6">{name}</Typography>
            </Button>
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
)(NameButton)
