import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { withStyles, Button, Typography, Dialog, DialogContent } from '@material-ui/core'
import { Warning } from '@material-ui/icons'

// import { Main, TopBar, ManageFields } from 'components'

import NameButton from './NameButton'
import TopBar from './TopBar'

const styles = {
    root: {
        // height: '100%',
        // margin: '0 auto',
        // background: '#cef3de',

    },

    dialog_content: {
        padding: 10,
        maxWidth: 280,

    },
    header: {
        display: 'flex',
    },
    warning_icon: {
        fontSize: '36px',
    },
    are_you_really: {
        fontWeight: 900,
        marginLeft: 5,
        paddingTop: 4,
    },
    once_revealed: {
        marginTop: 20,
        fontSize: '1.4rem',
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
            <Dialog className={c.root} open={open} onClose={onClose}>
                <DialogContent className={c.dialog_content}>
                    <div className={c.header}>
                        <Warning className={c.warning_icon} color="primary" />
                        <Typography className={c.are_you_really} variant="subtitle1">Are you really {selectedGifter}?</Typography>
                    </div>

                    <Typography className={c.once_revealed} variant="h6" color="primary">Once revealed, this card can not be view again!</Typography>
                    <div className={c.buttonContainer}>
                        <Button className={c.button} variant="contained" color="secondary">Yes, I am {selectedGifter}</Button>
                        <Button className={c.button} variant="contained" color="primary">No</Button>
                    </div>
                </DialogContent>
            </Dialog>
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
)(GifterDialog)
