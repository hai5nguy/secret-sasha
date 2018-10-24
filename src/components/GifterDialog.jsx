import React from 'react'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import { withStyles, Button, Typography, Dialog, DialogContent } from '@material-ui/core'
import { Warning } from '@material-ui/icons'

const styles = {
    root: {
    },
    paper: {
        margin: 0,
    },
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
    },
};

class GifterDialog extends React.Component {
    render() {
        const { classes: c, open, onClose, selectedGifter } = this.props
        return (
            <Dialog classes={{ paper: c.paper }} open={open} onClose={onClose}>
                <DialogContent className={c.dialog_content}>
                    <Warning className={c.warning_icon} color="primary" />
                    <Typography className={c.are_you_really} variant="h6" color="primary">Are you really {selectedGifter}?</Typography>
                    <Typography className={c.once_revealed} variant="h6" color="primary" align="center">Once revealed, no one can view this card again!</Typography>
                    <div className={c.buttonContainer}>
                        <Button className={c.button} variant="contained" color="primary" onClick={onClose}>No</Button>
                        <Button className={c.button} variant="contained" color="secondary">Yes, I am {selectedGifter}</Button>
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(GifterDialog)
