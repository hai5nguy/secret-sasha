import React from 'react'
import { withStyles, DialogTitle, Dialog, Typography } from '@material-ui/core'

import SashaIcon from './SashaIcon'

const styles = {
    dialogBody: {
        padding: 24,
    },
}

class AboutModel extends React.Component {
    handleClose = () => {
        this.props.onClose()
    }

    handleListItemClick = (value) => {
        this.props.onClose(value)
    }

    render() {
        const { classes: c, onClose, selectedValue, ...other } = this.props

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title" align="center">Secret Sasha</DialogTitle>
                <SashaIcon />
                <div className={c.dialogBody}>
                    <Typography component="p" align="center">
                        Made by Hai Nagooyen
                        <br />
                        <br />
                        @Copyright 2018
                    </Typography>
                </div>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AboutModel)
