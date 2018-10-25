import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles, Dialog } from '@material-ui/core'

import AlreadyViewed from './AlreadyViewed'
import ConfirmContent from './ConfirmContent'
import SecretContent from './SecretContent'
import closeDialog from 'actions/close-dialog'

const styles = {
    paper: {
        margin: 0,
    },
};

class GifterDialog extends React.Component {
    close = () => {
        closeDialog()
    }

    render() {
        const { classes: c, showDialog, secretSanta, secretSantaAlreadyViewed } = this.props

        if (!showDialog) return null;

        let content
        if (secretSantaAlreadyViewed) {
            content = <AlreadyViewed />
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
