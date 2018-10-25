import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles, Button, Typography, DialogContent } from '@material-ui/core'
import { Warning } from '@material-ui/icons'

import openCard from 'actions/open-card'
import closeDialog from 'actions/close-dialog'

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
    once_revealed: {
        color: '#544646',
        marginTop: 12,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        width: '48%',
        minHeight: 70,
        fontSize: '1.2rem',
    },
};

class ConfirmContent extends React.Component {
    close = () => {
        closeDialog()
    }

    open = () => {
        openCard(this.props.selectedGifter)
    }

    render() {
        const { classes: c, selectedGifter } = this.props
        return (
            <DialogContent className={c.dialog_content}>
                <Warning className={c.warning_icon} color="primary" />
                <Typography className={c.are_you_really} variant="h6" color="primary">Are you really {selectedGifter}?</Typography>
                <Typography className={c.once_revealed} variant="h6" color="primary" align="center">Once revealed, no one can view this card again!</Typography>
                <div className={c.buttonContainer}>
                    <Button className={c.button} variant="contained" color="primary" onClick={this.close}>No</Button>
                    <Button className={c.button} variant="contained" color="secondary" onClick={this.open}>Yes, I am {selectedGifter}</Button>
                </div>
            </DialogContent>
        )
    }
}

const mapStateToProps = state => ({
    selectedGifter: state.ui.selectedGifter,
})

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(ConfirmContent)
