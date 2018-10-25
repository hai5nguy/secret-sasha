import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles, Button, Typography, Dialog, DialogContent } from '@material-ui/core'
import { Warning } from '@material-ui/icons'

import ConfirmContent from './ConfirmContent'
import SecretContent from './SecretContent'
import openCard from 'actions/open-card'
// import setUi from 'actions/set-ui'
import closeDialog from 'actions/close-dialog'

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
    close = () => {
        closeDialog()
    }

    render() {
        console.count('gifterdialog render')
        const { classes: c, showDialog, secretSanta, secretSantaAlreadyViewed } = this.props

        if (!showDialog) return null;

        let content
        if (secretSantaAlreadyViewed) {
            content = <div>already viewed</div>
        } else if (secretSanta) {
            content = <SecretContent />
        } else {
            content = <ConfirmContent />
        }
        return (
            <Dialog classes={{ paper: c.paper }} open onClose={this.close}>
                {content}
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    const { showDialog, secretSanta, secretSantaAlreadyViewed, selectedGifter } = state.ui
    return { showDialog, secretSanta, secretSantaAlreadyViewed, selectedGifter }
}

export default compose(
    connect(mapStateToProps),
    withStyles(styles),
)(GifterDialog)
