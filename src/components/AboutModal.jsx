import React from 'react'
import classNames from 'classnames'
import { withStyles, DialogTitle, Dialog, Typography } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
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
        const { classes, onClose, selectedValue, ...other } = this.props

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">Secret Sasha</DialogTitle>
                <div className={classNames(classes.dialogBody)}>
                    <Typography component="p">
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
