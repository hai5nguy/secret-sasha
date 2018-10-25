import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles, Button, Typography, DialogContent } from '@material-ui/core'

import SashaIcon from './SashaIcon'

import closeDialog from 'actions/close-dialog'

const CLOSE_DELAY = 15000

const styles = {
    dialog_content: {
        padding: 10,
        maxWidth: 350,
        textAlign: 'center',
    },
    header: {
        display: 'flex',
    },
    warning_icon: {
        fontSize: '36px',
    },
    are_you_really: {
        fontWeight: 700,
    },
    secret_santa: {
        marginTop: 20,
        fontWeight: 900,
    },
    remember_who: {
        marginTop: 30,
        marginBottom: 20,
    },
    button: {
        width: '75%',
        minHeight: 70,
        fontSize: '1.2rem',
    },
};

class SecretContent extends React.Component {
    constructor() {
        super()
        setTimeout(() => {
            closeDialog()
        }, CLOSE_DELAY)
    }

    close = () => {
        closeDialog()
    }

    render() {
        const { classes: c, secretSanta } = this.props
        return (
            <DialogContent className={c.dialog_content}>
                <SashaIcon />
                <Typography className={c.your_secret} variant="h6">Your secret sasha is:</Typography>
                <Typography className={c.secret_santa} variant="h5">{secretSanta}</Typography>
                <Typography className={c.remember_who} variant="body1" color="primary">Remember who your secret sasha is.  You will not be able to see this again.</Typography>
                <Button className={c.button} variant="contained" color="secondary" onClick={this.close}>Ok</Button>
            </DialogContent>
        )
    }
}

const mapStateToProps = state => ({
    secretSanta: state.ui.secretSanta,
})

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(SecretContent)
