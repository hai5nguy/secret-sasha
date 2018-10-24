import React from 'react'
import classNames from 'classnames'
import { withStyles, DialogTitle, Dialog, Typography } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'

const styles = {
    sasha_icon: {
        width: '3rem',
        margin: 'auto',
    },
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
                <img className={c.sasha_icon} src="sasha_icon.png" />
                <div className={classNames(c.dialogBody)}>
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
